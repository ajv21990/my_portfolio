import React from 'react'
import '../chatPage/ChatPage.css'


export default class NewRoomForm extends React.Component{
    constructor(){
        super()
        this.state={
            roomName: ''
        }
    }
    handleChange = e =>{
        this.setState({
            roomName : e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
    this.props.createRoom(this.state.roomName)
    this.setState({roomName: ''})
    }

render(){
    return(
        <div>
        <form  onSubmit={this.handleSubmit}>
            <input
            value={this.state.roomName}
            onChange={this.handleChange}
            placeholder="NewRoomForm"
            type="text"
            required />
            <button id="create-room-btn" type="submit">+</button>
        </form>
        </div>
    )
}
}