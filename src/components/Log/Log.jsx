import { useNavigate } from "react-router-dom";
import React, { useState, useContext } from "react";
import "./lg.css";
import { assets } from "../../assets/assets/frontend_assets/assets";
import { sc } from "../context/Context";
import axios from "axios";

const Log = ({ sh, ssh }) => {
  const [ct, sct] = useState("Sign Up");
  const { url, stk, srl } = useContext(sc);
  const [dt, std] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const onc = (event) => {
    const { name, value } = event.target;
    std((pv) => ({ ...pv, [name]: value }));
  };

  const onLog = async (event) => {
    event.preventDefault();
    console.log(dt);

    let newUrl = url;
    if (ct === "Login") {
      newUrl += "/api/user/login";
    } else {
      newUrl += "/api/user/register";
    }

    try {
      const rs = await axios.post(newUrl, dt);
      console.log(rs);

      // console.log(rs.data.user.role);

      if (rs.data.success) {
        stk(rs.data.token);
        srl(rs.data.user.role);
        localStorage.setItem("token", rs.data.token);
        const role = rs.data.user.role;
        localStorage.setItem("role", role);

        if (role === "admin") {
          // 🔥 send token to admin app
          window.location.href = `https://admin-dashboard-bice-omega-74.vercel.app?token=${rs.data.token}`;
        } else {
          navigate("/");
        }

        if (ssh) ssh(false); // close modal
      } else {
        alert(rs.data.message);
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong!");
    }
  };

  // If you want modal behavior, keep this check

  return (
    <div className="lg">
      <form className="lgc" onSubmit={onLog}>
        <div className="lpt">
          <h2>{ct}</h2>
          <img onClick={() => ssh(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="lpi">
          {ct === "Sign Up" && (
            <input
              type="text"
              name="name"
              value={dt.name}
              onChange={onc}
              placeholder="Your name"
              required
            />
          )}
          <input
            type="email"
            name="email"
            value={dt.email}
            onChange={onc}
            placeholder="Your email"
            required
          />
          <input
            type="password"
            name="password"
            value={dt.password}
            onChange={onc}
            placeholder="Password"
            required
          />
        </div>
        <button type="submit">
          {ct === "Sign Up" ? "Create account" : "Login"}
        </button>
        <div className="lgpc">
          <input type="checkbox" required />
          <p>By continuing, I agree to the terms of use & privacy policy</p>
        </div>
        {ct === "Login" ? (
          <p>
            Create a new account?{" "}
            <span onClick={() => sct("Sign Up")}>Click here</span>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <span onClick={() => sct("Login")}>Login here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default Log;
