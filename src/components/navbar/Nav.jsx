import React, { useContext, useState } from "react";
import "./nav.css";
import { assets } from "../../assets/assets/frontend_assets/assets";
import { Link } from "react-router-dom";
import { sc } from "../context/Context";
import { useNavigate } from "react-router-dom";

const Nav = ({ ssh }) => {
  const [mn, smn] = useState("home");
  const { gtc, token, stk, rl, srl } = useContext(sc);
  const nav = useNavigate();
  const lgt = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    stk("");
    srl("");
    nav("/");
  };
  return (
    <div className="nav">
      <Link to={"/"}>
        <img src={assets.logo} alt="" className="logo" />
      </Link>
      <ul className="nm">
        <Link
          to={"/"}
          onClick={() => smn("home")}
          className={mn === "home" ? "active" : ""}
        >
          home
        </Link>
        <a
          href="#em"
          onClick={() => smn("menu")}
          className={mn === "menu" ? "active" : ""}
        >
          menu
        </a>
        <a
          href="#ad"
          onClick={() => smn("mobile")}
          className={mn === "mobile" ? "active" : ""}
        >
          mobile-app
        </a>
        <a
          href="#ft"
          onClick={() => smn("contact")}
          className={mn === "contact" ? "active" : ""}
        >
          contact us
        </a>
      </ul>
      <div className="nr">
        <img src={assets.search_icon} alt="" />
        <div className="ns">
          <Link to={"/ct"}>
            {" "}
            <img src={assets.basket_icon} alt="" />
          </Link>
          <div className={gtc() === 0 ? " " : "dot"}></div>
        </div>
        {!token || rl === "admin" ? (
          <button onClick={() => ssh(true)}>sign in</button>
        ) : (
          <div className="np">
            <img src={assets.profile_icon} alt="" />
            <ul className="npd">
              <li onClick={() => nav("/myorders")}>
                <img src={assets.bag_icon} alt="" />
                <p>Orders</p>
              </li>
              <hr />
              <li>
                <img src={assets.logout_icon} alt="" />
                <p onClick={lgt}>Logout</p>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Nav;
