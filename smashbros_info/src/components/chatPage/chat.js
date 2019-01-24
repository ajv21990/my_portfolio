import React from 'react'
import '../../components/chatPage/ChatPage.css'

export default class Chat extends React.Component{
    render(){
return(
    <div className="fullchatBox">
        <div className="topChatBox">
            <h1>Chat</h1>
        </div>
        <div className="middleChatBox">
            <p className="chatArea">Chat area</p>
            <p className="userList">List of Users</p>
        </div>
        <div className="bottomChatBox">
            <input type="text" />
            <button type="submit">Send</button>
        </div>
    </div>
)
    }
    
}