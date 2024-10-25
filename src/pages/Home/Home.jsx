import React from "react";
import Header from "../Shared/Header/Header";
import Navbar from "../Shared/Navbar/Navbar";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>
      <div className="grid md:grid-cols-4 gap-4">
        <div className="border">
          <LeftSideNav></LeftSideNav>
        </div>
        <div className="border md:col-span-2">
          <h1 className="3xl">News Coming Soon</h1>
        </div>
        <div className="border">
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default Home;
