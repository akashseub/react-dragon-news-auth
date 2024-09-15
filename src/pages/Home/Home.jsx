import React from "react";
import Header from "../Shared/Header/Header";
import Navbar from "../Shared/Navbar/Navbar";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>
      <h1 className="text-3xl">Hello from home</h1>
    </div>
  );
};

export default Home;
