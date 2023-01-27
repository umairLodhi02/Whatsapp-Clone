import AccountBar from "../Topbar/AccountBar";
import "./sidebar.css";

const Sidebar = ({ data, handleActiveChat, activeChat }) => {
  return (
    <div className="sidebar">
      <AccountBar />
      {data.map((v) => (
        <div
          className={`contact_box ${
            activeChat && activeChat.chatId === v.chatId ? "active" : ""
          }`}
          key={v.chatId}
          onClick={() => handleActiveChat(v.chatId)}
        >
          <div className="img_container">
            <img src="https://www.w3schools.com/howto/img_avatar.png" alt="" />
          </div>
          <div className="text_container">
            <h3>{v.chatId}</h3>
            <p>{v.chatBody[v.chatBody.length - 1].msgText}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
