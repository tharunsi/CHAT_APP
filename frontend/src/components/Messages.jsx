import React, { useEffect, useRef } from 'react'
import Message from './Message'
import "./Messages.css"
import useGetMessages from '../hooks/useGetMessages'
import MessageSkeleton from './skeletons/MessageSkeleton'
import useListenMessage from '../hooks/useListenMessage'

const Messages = () => {
  const {messages,loading} = useGetMessages();
  useListenMessage();
  const lastMessageRef = useRef();
 
   useEffect(() => {
     setTimeout(() => {
       lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
     }, 100);
   },[messages])
  return (
    <div className='oorumblood-msg-container'>

        {!loading && messages.length > 0 && messages.map((message) => (
          <div key={message._id} ref={lastMessageRef}><Message message={message} /></div> ))}


        {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}

        {!loading && messages.length === 0 && (
          <p className='send-msg-para'>Send a message to start the conversation</p>
        )}
   
      {/* <Message /> */}
    </div>
  )
}

export default Messages
