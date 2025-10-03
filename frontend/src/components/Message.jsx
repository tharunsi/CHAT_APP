import React from 'react'
import "./Message.css";
import useConversation from '../zustand/useConversation';
import {useAuthContext} from '../context/AuthContext';
import { extractTime } from '../utils/extractTime';

const Message = ({message}) => {
  console.log("Message prop:", message);
  const {authUser} = useAuthContext();
    const {selectedConversation} = useConversation();
    const fromMe = message?.senderId?.toString() === authUser?._id?.toString();
    const formattedTime = extractTime(message.createdAt);
    const chatClassName = fromMe ? 'message message-end' : 'message message-start';
    const profilePic = fromMe ? authUser.profilePic: selectedConversation?.profilePic;
    const shakeClass = message.shouldShake ? "shake" : ""

  return (
    <div className={`message ${chatClassName}`}>
     
       
      <div className={`message-bubble ${shakeClass}`}>{message.message}
      <div className="message-footer">{formattedTime}</div>
      </div>
       
      <div className="message-avatar">
        <img
          alt="User avatar"
          src={profilePic}
        />
      </div>

     
    </div>
  );
};

export default Message;


