import React from 'react'
import "./MessageInput.css";
import { BsSend } from "react-icons/bs";
const MessageInput = () => {
  return (
    <>
    <form className="message-form">
      <div className="message-input-wrapper">
        <input
          type="text"
          className="message-input"
          placeholder="Send a message"
        />
        <button type="submit" className="send-button">
          <BsSend />
        </button>
      </div>
    </form>
    </>
  )
}

export default MessageInput
