import React, { useState } from "react";
import Head from "next/head";
import axios from "axios";

const Home = () => {
  const [state, setState] = useState({ name: "", email: "" });

  const submitHandler = async (ev) => {
    ev.preventDefault();

    await axios.post(`http://localhost:3000/api/user/add`, {
      name: state.name,
      email: state.email,
    });

    setState({ name: "", email: "" });
  };
  return (
    <div className='w-full h-[100vh] bg-slate-700'>
      <Head></Head>
      {/* NAVBAR  */}
      <nav className={`w-full h-10 bg-gray-900 text-white`}>Nav</nav>
      {/* CONTENT  */}
      <div className={`flex flex-col justify-center items-center`}>
        <h1 className='text-3xl font-bold underline text-white'>
          Hello world!
        </h1>
        <form
          className={`mt-10 w-[40rem] h-[32rem] bg-blue-600 flex flex-col justify-center 
          items-center gap-2`}
        >
          <input
            value={state.name}
            placeholder='name'
            onChange={(e) => setState({ ...state, name: e.target.value })}
          />
          <input
            value={state.email}
            placeholder='email'
            onChange={(e) => setState({ ...state, email: e.target.value })}
          />
          <button
            className={`bg-purple-800 rounded-md p-2`}
            onClick={submitHandler}
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Home;
