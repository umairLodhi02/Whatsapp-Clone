import { useContext, useState } from "react";
import Chat from "../../Components/Chats/Chat";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { CHATS_DATA } from "../../Constants/constants";
import userContext from "../../context/userContext";

const Dashboard = () => {
  const [activeChat, setActiveChat] = useState(null);
  const { session } = useContext(userContext);
  const handleActiveChat = (chatId) => {
    const data = CHATS_DATA.filter((c) => c.chatId === chatId);

    const d = data[0];
    setActiveChat(d);
  };

  return (
    <>
      <Sidebar
        data={CHATS_DATA}
        activeChat={activeChat}
        handleActiveChat={handleActiveChat}
      />
      {!activeChat ? <h3>Click on any Chat</h3> : <Chat chat={activeChat} />}
    </>
  );
};

export default Dashboard;
