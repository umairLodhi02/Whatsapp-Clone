import { useState } from "react";
import Chat from "../../Components/Chats/Chat";
import Sidebar from "../../Components/Sidebar/Sidebar";

const Dashboard = () => {
  const chats = [
    { id: 1, text: "chat 1" },
    { id: 2, text: "chat 2" },
    { id: 3, text: "chat 3" },
    { id: 4, text: "chat 4" },
    { id: 5, text: "chat 5" },
    { id: 6, text: "chat 6" },
    { id: 7, text: "chat 7" },
    { id: 8, text: "chat 8" },
    { id: 9, text: "chat 9" },
    { id: 10, text: "chat 10" },
    { id: 11, text: "chat 11" },
    { id: 12, text: "chat 12" },
    { id: 13, text: "chat 13" },
    { id: 14, text: "chat 14" },
    { id: 15, text: "chat 15" },
    { id: 16, text: "chat 16" }
  ];
  const [activeChat, setActiveChat] = useState(null);

  const handleActiveChat = (chatId) => {
    const data = chats.filter((c) => c.id === chatId);

    const d = data[0];
    setActiveChat(d);
  };

  return (
    <>
      <Sidebar
        data={chats}
        activeChat={activeChat}
        handleActiveChat={handleActiveChat}
      />
      {!activeChat ? <h3>Click on any Chat</h3> : <Chat chat={activeChat} />}
    </>
  );
};

export default Dashboard;
