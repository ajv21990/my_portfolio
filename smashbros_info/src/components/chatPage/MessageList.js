import React from 'react'
import ReactDom from 'react-dom'
import Message from './Message'

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
