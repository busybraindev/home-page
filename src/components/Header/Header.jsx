import React from "react";
import "./hd.css";

const Header = () => {
  return (
    <div className="hd">
      <div className="hc">
        <h2>Order your favorite food here</h2>
        <p>
          Choose from a diverse menu featuring a deletable array of dishes
          crafted with the finest ingredients and culinary expertise.Our mission
          is to satisfy your cravings and elevate your dining experience, one
          delicious meal at a time.
        </p>
        <button>View Menu</button>
      </div>
    </div>
  );
};

export default Header;
