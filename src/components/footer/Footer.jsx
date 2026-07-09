import React from "react";
import "./ft.css";
import { assets } from "../../assets/assets/frontend_assets/assets";

const Footer = () => {
  return (
    <div className="ft" id="ft">
      <div className="ftc">
        <div className="ftl">
          <img src={assets.logo} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            delectus cupiditate veritatis natus eos. Reprehenderit maxime
            expedita soluta voluptate facilis doloribus, iste numquam esse
            deserunt voluptates tempore cumque rerum veniam!
          </p>
          <div className="ic">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="ftct">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="ftr">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>09041571554</li>
            <li>Mubarakadeyemi1994@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="fcp">Copyright 2026 © Mubarak.com- All Right Reserved</p>
    </div>
  );
};

export default Footer;
