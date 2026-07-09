import React, { useContext, useState } from "react";
import "./fi.css";
import { assets } from "../../assets/assets/frontend_assets/assets";
import { sc } from "../context/Context";

const Fi = ({ id, name, price, description, image }) => {
  const { ct, ac, rv, url } = useContext(sc);
  return (
    <div className="fi">
      <div className="fct">
        <img className="fmg" src={url + "/images/" + image} alt="" />
        {ct[id] ? (
          <div className="fc">
            <img onClick={() => rv(id)} src={assets.remove_icon_red} alt="" />
            <p>{ct[id]}</p>
            <img onClick={() => ac(id)} src={assets.add_icon_green} alt="" />
          </div>
        ) : (
          <img
            className="add"
            onClick={() => ac(id)}
            src={assets.add_icon_white}
          ></img>
        )}
      </div>
      <div className="info">
        <div className="fr">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
        <p className="fd">{description}</p>
        <p className="fp">${price}</p>
      </div>
    </div>
  );
};

export default Fi;
