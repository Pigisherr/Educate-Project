import React, { useState, useEffect } from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Chat = () => {
  const navigate = useNavigate();
  const [chats, setChats] = useState("");
  const [chatHistory, setChatHistory] = useState([""]);

  const setValues = (e) => {
    const { value } = e.target;
    setChats(value);
  };

  useEffect(() => {
    fetchChatHistory();
  }, []);

  const fetchChatHistory = async () => {
    try {
      const response = await axios.get("http://localhost:5174/chat");
      setChatHistory([response.data]);
    } catch (err) {
      console.error("error in fetchChatHistory", err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5174/chat", { chats });
      setChats("");
      fetchChatHistory();
    } catch (err) {
      console.error("error fetching chat history", err);
    }
  };

  return (
    <div className="bg-green min-h-screen justify-between flex flex-col">
      <div className="flex justify-between">
        <h1 className="text-7xl ml-[4rem] mt-[2rem]">Educate</h1>
        <button
          onClick={() => navigate("/Menu")}
          className="text-7xl mt-[1rem] mr-[2rem] bg-blue p-5 rounded-xl text-white"
        >
          Sign Out
        </button>
      </div>
      <div id="chatContainer">
        {" "}
        {chatHistory.map((chat, index) => (
          <div key={index}>{chat}</div>
        ))}
      </div>
      <div className="flex flex-row sticky bottom-0">
        <input
          className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="message"
          type="text"
          placeholder="Enter your message"
          name="message"
          onChange={setValues}
        />
        <button
          onClick={handleSubmit}
          className="bg-blue text-white text-3xl p-[3rem] justify-center items-center flex"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
