import React from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";

const Menu = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-green text-black flex justify-center items-center h-screen flex-col">
      <h1 className="mb-[7rem] text-9xl">hello User!</h1>
      <h1 className="mb-[7rem] text-9xl">What would you like to do?</h1>
      <div className="flex flex-row">
        <button
          className="mr-[5rem] pt-[4rem] pb-[4rem] pl-[10rem] pr-[10rem] text-2xl bg-blue rounded-[5rem] text-white"
          onClick={() => navigate("/Chat")}
        >
          Chat
        </button>
        <button
          className="pt-[4rem] pb-[4rem] pl-[10rem] pr-[10rem] text-2xl bg-blue rounded-[5rem] text-white"
          onClick={() => navigate("/Classroom")}
        >
          Classroom
        </button>
      </div>
    </div>
  );
};

export default Menu;
