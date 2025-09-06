import React from 'react'
import Messages from './Messages'
import "./MessageContainer.css"
import MessageInput from './MessageInput'
import { TiMessages } from "react-icons/ti";

const MessageContainer = () => {
    const noChatSelected = true;
  return (
    <div className='msg-container-main'>
        {noChatSelected ? (
            <NoChatSelected />
        ):(
      <>
      <div className='msg-container-box'>
           <span className='label-msg-container'>To:</span>
           <span className='dude-msg-container'>John doe</span>
      </div>
      <Messages />
      <MessageInput />
      </>
      )}
    </div>
  )
}

export default MessageContainer;


const NoChatSelected = () => {
  return (
    <div className="nochat-container">
      <div className="nochat-box">
        <p>Welcome 👋 John Doe</p>
        <p>Select a chat to start messaging</p>
        <TiMessages className="nochat-icon" />
      </div>
    </div>
  );
};
