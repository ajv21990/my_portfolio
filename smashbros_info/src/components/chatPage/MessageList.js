import React from 'react'
import ReactDom from 'react-dom'
import Message from './Message'
import '../chatPage/ChatPage.css'


export default class MessageList extends React.Component {
    componentDidUpdate = () => {
        if(this.shouldScrolltoBottom){
            const node = ReactDom.findDOMNode(this)
            node.scrollTop = node.scrollHeight
        }

    }

    componentWillUpdate = () => {
        const node = ReactDom.findDOMNode(this)
        this.shouldScrolltoBottom = node.scrollTop + node.clientHeight + 100 >= node.scrollHeight
    }

    render(){
        if(!this.props.roomId){
            return(
                <div className="message-list">
                    <div className="join-room">
                        &larr;Join A Room!
                    </div>
                </div>
            )
        }
        return(
    <div className="message-list">
    {this.props.messages.map((message, index) => {
        return(
            <Message key={index} username={message.senderId} text={message.text}/>
        )
    })}

    </div>
        )}
}
