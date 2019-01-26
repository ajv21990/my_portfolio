import React from 'react'
import Chatkit from '@pusher/chatkit'
import MessageList from './MessageList'
import NewRoomForm from './NewRoomForm'
import RoomList from './RoomList'
import SendMessageForm from './SendMessageForm';
import {tokenUrl,instanceLocator} from '../../config'
import '../chatPage/ChatPage.css'

export default class ChatApp extends React.Component{
    constructor(){
        super()
        this.state={
            messages:[],
            joinableRooms:[],
            joinedRooms: [],
            roomId: null
        }
    }


    componentDidMount = () =>{
        const chatManager = new Chatkit.ChatManager({
            instanceLocator,
            userId: 'AJ',
            tokenProvider: new Chatkit.TokenProvider({
                url: tokenUrl
            })
        })

        chatManager.connect()
        .then(currentUser => {
            this.currentUser = currentUser
            this.getRooms()
        })
        .catch(err => console.log('error on connecting: ', err))
    }

    subscribeToRoom = roomId => {
        this.setState({messages:[]})
        this.currentUser.subscribeToRoom({
            roomId: roomId,
            hooks:{
                onNewMessage: message =>{
                    this.setState({
                        messages: [...this.state.messages, message]
                    })
                }
            }
        })
        .then(room =>{
            this.setState({
                roomId: room.id
            })
            this.getRooms()
        })
        .catch(err => console.log('error on subscribing to room: ', err))
    }

    getRooms = () => {
        this.currentUser.getJoinableRooms()
            .then(joinableRooms => {
                this.setState({
                    joinableRooms,
                    joinedRooms: this.currentUser.rooms
                })
            })
            .catch(err => console.log('error on joinable rooms: ', err))
    }

    sendMessage = text => {
        this.currentUser.sendMessage({
            text,
            roomId: this.state.roomId
        })
    }

    createRoom = roomName => {
        console.log(this.currentUser)
        this.currentUser.createRoom({
            name: roomName
        })
        .then(room => this.subscribeToRoom(room.id))
        .catch(err => console.log('error with create room',err))
        }
    
render(){
    return(
        <div className="ChatApp">
        
            <RoomList
            roomId ={this.state.roomId}
            subscribeToRoom={this.subscribeToRoom}
            rooms={[...this.state.joinableRooms, ...this.state.joinedRooms]}/>

            <MessageList
            roomId ={this.state.roomId} 
            messages={this.state.messages}/>

            <SendMessageForm  
            disabled={!this.state.roomId}
            sendMessage={this.sendMessage}/>

            <NewRoomForm 
            createRoom = {this.createRoom} />

        </div>
    )
}
}