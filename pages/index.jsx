import React from "react";
import Head from "next/head";

const Home = () => {
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
      </div>
    </div>
  );
};

export default Home;