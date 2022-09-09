import React from "react";
import Head from "next/head";

const Home = () => {
  const submitHandler = (ev) => {
    ev.preventDefault();
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
          <input />
          <input />
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
