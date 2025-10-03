import Conversation from './Conversation'
import "./Conversations.css"
import useGetConversations from '../hooks/useGetConversations';
import LoadingSpinner from './LoadingSpinner';
import { getRandomEmoji } from '../utils/emojis';

const Conversations = () => {
 const{loading, conversations} = useGetConversations();
 console.log("CONVERSATIONS", conversations)
  return (
    <div className='container-box-convo'>
      {/* <Conversation />
      <Conversation />
      <Conversation />
      <Conversation />
      <Conversation />
      <Conversation /> */}

      {conversations.map((conversation,idx) => (
        <Conversation key={conversation._id} conversation={conversation}
        emoji={getRandomEmoji() }
        lastIdx = {idx === conversations.length - 1} />
      ))}

      {loading ? <LoadingSpinner /> : null}
    </div>
  )
}

export default Conversations
