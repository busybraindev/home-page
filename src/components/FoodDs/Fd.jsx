import React, { useContext } from "react";
import "./fd.css";
import { sc } from "../context/Context";
import Fi from "../Fooditem/Fi";

const Fd = ({ cg }) => {
  const { food_list } = useContext(sc);
  return (
    <div className="fd" id="fd">
      <h2>Top dishes near you</h2>
      <div className="fl">
        {food_list.map((item, i) => {
          if (cg === "All" || cg === item.category)
            return (
              <Fi
                key={i}
                id={item._id}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
              ></Fi>
            );
        })}
      </div>
    </div>
  );
};

export default Fd;
