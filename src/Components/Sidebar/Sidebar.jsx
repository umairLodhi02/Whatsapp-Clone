import "./sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faUser } from "@fortawesome/free-solid-svg-icons";
const Sidebar = ({ data, handleActiveChat, activeChat }) => {
  return (
    <div className="sidebar">
      {data.map((v) => (
        <div className="contact_box">
          <div className="img_container">
            <FontAwesomeIcon icon={faUser} />
          </div>
          <h3
            className={activeChat && activeChat.id === v.id ? "active" : ""}
            onClick={() => handleActiveChat(v.id)}
          >
            {v.id}
          </h3>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
