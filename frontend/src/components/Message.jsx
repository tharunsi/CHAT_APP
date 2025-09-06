import React from 'react'
import "./Message.css";

const Message = () => {
  return (
    <div className="message message-end">
     
       
      <div className="message-bubble">Hi! What is up?
        <div className="message-footer">12:42</div>
      </div>
       
      <div className="message-avatar">
        <img
          alt="User avatar"
          src="https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png"
        />
      </div>

     
    </div>
  );
};

export default Message;


