import React from "react";
import "./index.css";
import { useState } from "react";
import "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

function SignUp() {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
  });

  const updateValues = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, email, password } = values;
    if (username.length < 8) {
      toast.error("username should be greater than 4 characters");
      return false;
    } else if (password.length < 8) {
      toast.error("pasword should be greater than 8 characteras");
    } else {
      return true;
    }
  };
  const registerUser = async (e) => {
    e.preventDefault();
    const { username, email, password } = values;
    if (handleSubmit(e)) {
      try {
        await axios.post("http://localhost:5174/", {
          username,
          email,
          password,
        });
        toast.success("user registered successfully");
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <>
      <div className="flex justify-center items-center h-screen bg-green flex-col">
        <h1 className="text-9xl mb-[5rem]">Sign Up</h1>

        <form
          className="bg-white shadow-md rounded px-10 py-8 mb-4"
          style={{ width: "400px" }}
        >
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Enter your username"
              name="username"
              onChange={updateValues}
            />
          </div>
          <div className="mb-8">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Enter your email"
              name="email"
              onChange={updateValues}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Enter your password"
              name="password"
              onChange={updateValues}
            />
          </div>
          <div className="flex justify-between mb-6">
            <div className="flex items-center">
              <input
                type="checkbox"
                className="mr-2 leading-tight"
                id="remember_me"
              />
              <label htmlFor="remember_me" className="text-sm">
                I agree with the terms of service of this website
              </label>
            </div>
          </div>
          <div className="mb-8">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline bg-blue w-full"
              type="submit"
              onClick={registerUser}
            >
              Register
            </button>
            <ToastContainer />
          </div>
        </form>
      </div>
    </>
  );
}

export default SignUp;
