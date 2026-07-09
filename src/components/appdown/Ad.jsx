import React from "react";
import "./ad.css";
import { assets } from "../../assets/assets/frontend_assets/assets";

const Ad = () => {
  return (
    <div className="ad" id="ad">
      <p>
        For Better Experience Download <br />
        Tomato App
      </p>
      <div className="adp">
        <img src={assets.play_store} alt="" />
        <img src={assets.app_store} alt="" />
      </div>
    </div>
  );
};

export default Ad;
