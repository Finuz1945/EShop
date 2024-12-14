/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://dummyjson.com/auth/login", {
        username,
        password,
      });
      localStorage.setItem("token", response.data.token);
      navigate("/products");
    } catch (err) {
      setError("Login gagal. Periksa username dan password Anda.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex flex-col w-full max-w-sm bg-white shadow-md rounded-lg p-6">
        <h2 className="text-center text-3xl font-bold text-sky-600 mb-6">Login</h2>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <input className="mb-4 px-4 py-2 border border-gray-300 rounded-md" type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
          <input className="mb-4 px-4 py-2 border border-gray-300 rounded-md" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          {error && <p className="text-center text-red-500 mb-4">{error}</p>}
          <button className="bg-cyan-500 hover:bg-cyan-900 text-white rounded-md py-2" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
