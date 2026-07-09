import React, { useState } from "react";
import "./hm.css";
import Header from "../../components/Header/Header";
import Em from "../../components/Ex/Em";
import Fd from "../../components/FoodDs/Fd";
import Ad from "../../components/appdown/Ad";

const Home = () => {
  const [cg, scg] = useState("All");
  return (
    <div>
      <Header></Header>
      <Em cg={cg} scg={scg}></Em>
      <Fd cg={cg}></Fd>
      <Ad></Ad>
    </div>
  );
};

export default Home;
