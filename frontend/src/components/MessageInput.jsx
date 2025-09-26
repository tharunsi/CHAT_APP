import React, { useState } from 'react'
import "./MessageInput.css";
import { BsSend } from "react-icons/bs";
import useSendMessage from '../hooks/useSendMessage';
import LoadingSpinner from './LoadingSpinner';

const MessageInput = () => {
  const [message,setMessage] = useState("");
  const {loading, sendMessage} = useSendMessage()
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message) return;
    await sendMessage(message);
    setMessage("");
  }
  return (
    <>
    <form className="message-form" onSubmit={handleSubmit}>
      <div className="message-input-wrapper">
        <input
          type="text"
          className="message-input"
          placeholder="Send a message"
          value={message} onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit" className="send-button">{loading ? <LoadingSpinner /> : <BsSend />}
          
        </button>
      </div>
    </form>
    </>
  )
}

export default MessageInput
