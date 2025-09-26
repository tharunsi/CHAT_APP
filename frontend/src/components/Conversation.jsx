import "./Conversation.css";
import useConversation from "../zustand/useConversation";

const Conversation = ({conversation,lastIdx,emoji}) => {

  const {selectedConversation, setSelectedConversation} = useConversation()

  const isSelected = selectedConversation?._id === conversation._id;
  return (
    <>
      <div className={`conversation ${isSelected ? "selected" : ""}`}
      onClick={() => setSelectedConversation(conversation)} >
        <div className="avatar online">
          <div className="avatar-image">
            <img
              src={conversation.profilePic}
              alt="user avatar"
            />
          </div>
        </div>

        <div className="conversation-content">
          <div className="conversation-header">
            <p className="conversation-name">{conversation.fullName}</p>
            <span className="conversation-time">{emoji}</span>
          </div>
        </div>
      </div>

    {!lastIdx && <div className="divider"></div>}
    </>
  );
};

export default Conversation;
