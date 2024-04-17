import React from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";

const Frontpage = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-green text-black flex justify-center items-center h-screen flex-col">
      <h1 className="mb-[7rem] text-9xl">Educate</h1>
      <div className="flex flex-row">
        <button
          className="mr-[5rem] pt-[4rem] pb-[4rem] pl-[10rem] pr-[10rem] text-2xl bg-blue rounded-[5rem]"
          onClick={() => navigate("SignUp")}
        >
          Sign Up
        </button>
        <button
          className="pt-[4rem] pb-[4rem] pl-[10rem] pr-[10rem] text-2xl bg-blue rounded-[5rem]"
          onClick={() => navigate("Login")}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Frontpage;
