import React from "react";
import "./em.css";
import { menu_list } from "../../assets/assets/frontend_assets/assets";

const Em = ({ cg, scg }) => {
  return (
    <div className="em" id="em">
      <h1>Explore our menu</h1>
      <p className="et">
        Choose from a diverse menu featuring a deletable array of dishes crafted
        with the finest ingredients and culinary expertise.Our mission is to
        satisfy your cravings and elevate your dining experience, one delicious
        meal at a time.
      </p>
      <div className="el">
        {menu_list.map((item, i) => {
          return (
            <div
              onClick={() =>
                scg((pv) => (pv === item.menu_name ? "All" : item.menu_name))
              }
              key={i}
              className="eml"
            >
              <img
                className={cg === item.menu_name ? "active" : ""}
                src={item.menu_image}
                alt=""
              />
              <p>{item.menu_name}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

export default Em;
