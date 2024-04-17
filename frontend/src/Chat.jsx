import React, { useState } from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Chat = () => {
  const navigate = useNavigate();
  const [chats, setChats] = useState({ chat: "" });

  const setValues = (e) => {
    const { value } = e.target;
    setChats({ chat: value });
  };

  const handleSubmit = (e) => {
    axios.post("http://localhost:5174/chat", chats);
  };

  return (
    <div class="bg-green min-h-screen justify-between flex flex-col">
      <div class="flex justify-between">
        <h1 class="text-7xl ml-[4rem] mt-[2rem]">Educate</h1>
        <button
          onClick={() => navigate("/Menu")}
          class="text-7xl mt-[1rem] mr-[2rem] bg-blue p-5 rounded-xl text-white"
        >
          Sign Out
        </button>
      </div>
      <div id="chatContainer"></div>
      <div class="flex flex-row sticky bottom-0">
        <input
          class="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="message"
          type="text"
          placeholder="Enter your message"
          name="message"
          onChange={setValues}
        />
        <button
          onClick={handleSubmit}
          class="bg-blue text-white text-3xl p-[3rem] justify-center items-center flex"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
