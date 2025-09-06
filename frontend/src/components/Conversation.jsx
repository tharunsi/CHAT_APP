import "./Conversation.css";

const Conversation = () => {
  return (
    <>
      <div className="conversation">
        <div className="avatar online">
          <div className="avatar-image">
            <img
              src="https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png"
              alt="user avatar"
            />
          </div>
        </div>

        <div className="conversation-content">
          <div className="conversation-header">
            <p className="conversation-name">John Doe</p>
            <span className="conversation-time">🎃</span>
          </div>
        </div>
      </div>

      <div className="divider"></div>
    </>
  );
};

export default Conversation;
