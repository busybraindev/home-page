import React, { useContext } from "react";
import "./ct.css";
import { sc } from "../../components/context/Context";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { ct, food_list, rv, gtc, url } = useContext(sc);
  const nav = useNavigate();
  return (
    <div className="ct">
      <div className="it">
        <div className="tt">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, i) => {
          if (ct[item._id] > 0) {
            return (
              <>
                <div className="tt ctt">
                  <img src={url + "/images/" + item.image} alt="" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{ct[item._id]}</p>
                  <p>${item.price * ct[item._id]}</p>
                  <p onClick={() => rv(item._id)} className="cs">
                    x
                  </p>
                </div>
                <hr />
              </>
            );
          }
        })}
      </div>
      <div className="cb">
        <div className="cbt">
          <h2>Cart Totals</h2>
          <div>
            <div className="ctd">
              <p>Subtotal</p>
              <p>${gtc()}</p>
            </div>
            <hr />
            <div className="ctd">
              <p>Delivery Fee</p>
              <p>${gtc() === 0 ? 0 : 2}</p>
            </div>
            <hr />
            <div className="ctd">
              <b>Total</b>
              <b>${gtc() === 0 ? 0 : gtc() + 2}</b>
            </div>
          </div>
          <button onClick={() => nav("/od")}>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cpc">
          <div>
            <p>if you have a promo code, Enter it here</p>
            <div className="ctpi">
              <input type="text" placeholder="promo code" />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
