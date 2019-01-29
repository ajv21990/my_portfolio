import React from 'react'
import Chatkit from '@pusher/chatkit'
import MessageList from './MessageList'
import NewRoomForm from './NewRoomForm'
import RoomList from './RoomList'
import SendMessageForm from './SendMessageForm';
import { tokenUrl, instanceLocator } from '../../config'
import Modal from '@material-ui/core/Modal'
import TextInput from '../common/TextInputs'
import SubmitButton from '../common/SubmitButton'
import RegisterForm from '../register/RegisterForm'
import '../chatPage/ChatPage.css'


export default class ChatApp extends React.Component {
    constructor() {
        super()
        this.state = {
            messages: [],
            joinableRooms: [],
            joinedRooms: [],
            roomId: null,
            modalShow: true,
            modalRegisterShow: false
        }
    }


    componentDidMount = () => {
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
        this.setState({ messages: [] })
        this.currentUser.subscribeToRoom({
            roomId: roomId,
            hooks: {
                onNewMessage: message => {
                    this.setState({
                        messages: [...this.state.messages, message]
                    })
                }
            }
        })
            .then(room => {
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
            .catch(err => console.log('error with create room', err))
    }



    render() {
        return (
            <div className="ChatApp">

                <RoomList
                    roomId={this.state.roomId}
                    subscribeToRoom={this.subscribeToRoom}
                    rooms={[...this.state.joinableRooms, ...this.state.joinedRooms]} />

                <MessageList
                    roomId={this.state.roomId}
                    messages={this.state.messages} />

                <NewRoomForm
                    createRoom={this.createRoom} />

                <SendMessageForm
                    disabled={!this.state.roomId}
                    sendMessage={this.sendMessage} />

                {/* Login Modal */}
                <Modal
                    open={this.state.modalShow}
                >
                    <div className="loginForm" style={{ padding: "300px" }}>
                        <div className="col-md-10 border rounded mx-auto" style={{ width: "900px", backgroundColor: "white" }}>
                            <h2 className="mt-4" style={{ textAlign: "center" }}>Chat Login</h2>
                            <hr />
                            <div className="col-md-6 mx-auto" style={{ width: "400px" }}>
                                <TextInput label="Email" id="email" type="email" val={this.state.email} handleChange={this.handleChange} />
                                <TextInput label="Password" id="password" type="password" val={this.state.password} handleChange={this.handleChange} />
                                <div className="row">
                                    <SubmitButton className="btn btn-primary mt-2 mb-2 ml-3" label="Log In" onClick={this.logIn} />
                                    <p className="mt-2 ml-3">or <button className="btn btn-link" onClick={this.goToRegister}>Sign up</button> </p>
                                </div>
                            </div>
                        </div>

                    </div>

                </Modal>

                {/* Register Modal */}

                <Modal
                    open={this.state.modalRegisterShow}
                >
                    <div style={{ padding: "250px" }}>
                        <div className="form-control border rounded mx-auto" style={{ width: "400px", backgroundColor: "white", height: "400px" }}>
                            <h3 style={{ textAlign: "center" }}>Register</h3>
                            <hr />
                            <div className='panel panel-default'>
                            </div>
                            <div className="form-group">
                                <RegisterForm
                                    state={this.state}
                                    handleChange={this.handleChange}
                                    handleClick={this.handleClick}
                                />
                            </div>
                        </div>
                    </div>
                </Modal>
            </div>
        )
    }
}