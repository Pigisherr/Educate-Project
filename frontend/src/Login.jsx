import React from "react";
import "./index.css";
import { useState } from "react";
import "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const updateValues = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleValidation = async () => {
    const { email, password } = values;
    if (password.length < 8) {
      toast.error("password should be more than 7 characters long!");
      return false;
    } else {
      toast.success("handle validation done perfectly!");
      return true;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = values;
    try {
      // Await the result of handleValidation
      const isValid = await handleValidation();
      if (isValid) {
        // Proceed with the login request
        try {
          // Await the response from axios.post
          const response = await axios.post("http://localhost:5174/login", {
            email,
            password,
          });
          if (response.status === 200) {
            navigate("/Menu");
          }
        } catch (err) {
          console.error("Error in the login request", err);
          toast.error("An error occurred while logging in");
        }
      } else {
        // Handle validation errors
        toast.error("Validation failed. Please check your inputs.");
      }
    } catch (err) {
      // Handle errors in handleValidation
      console.error("Error in handleValidation", err);
      toast.error("An error occurred during validation");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-green flex-col">
      <h1 className="text-9xl pb-[5rem]">Log In</h1>

      <form
        className="bg-white shadow-md rounded px-10 py-8 mb-4"
        style={{ width: "400px" }}
      >
        <div className="mb-6">
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
              Remember me
            </label>
          </div>
          <a href="#" className="text-sm text-blue-500 hover:text-blue-700">
            Forgot password?
          </a>
        </div>
        <div className="mb-8">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full bg-blue"
            type="submit"
            onClick={handleSubmit}
          >
            Login
          </button>
        </div>
        <ToastContainer />
      </form>
    </div>
  );
}

export default Login;
