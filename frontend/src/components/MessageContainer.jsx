import React, { useEffect } from 'react'
import Messages from './Messages'
import "./MessageContainer.css"
import MessageInput from './MessageInput'
import { TiMessages } from "react-icons/ti";
import useConversation from '../zustand/useConversation';
import { useAuthContext } from '../context/AuthContext';

const MessageContainer = () => {
    const {selectedConversation, setSelectedConversation} = useConversation()

    useEffect(() => {
      return() => setSelectedConversation(null)
    },[setSelectedConversation])
  return (
    <div className='msg-container-main'>
        {!selectedConversation ? (
            <NoChatSelected />
        ):(
      <>
      <div className='msg-container-box'>
           <span className='label-msg-container'>To:</span>{" "}
           <span className='dude-msg-container'>{selectedConversation.fullName}</span>
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

  const {authUser} = useAuthContext()
  return (
    <div className="nochat-container">
      <div className="nochat-box">
        <p>Welcome 👋 {authUser.fullName}</p>
        <p>Select a chat to start messaging</p>
        <TiMessages className="nochat-icon" />
      </div>
    </div>
  );
};
