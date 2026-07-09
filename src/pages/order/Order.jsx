import React, { useContext, useEffect, useState } from "react";
import "./od.css";
import { sc } from "../../components/context/Context";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Order = () => {
  const { gtc, token, food_list, ct, url } = useContext(sc);
  const [data, sdt] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });
  const onc = (e) => {
    const { name, value } = e.target;
    sdt((pv) => ({ ...pv, [name]: value }));
  };
  const nav = useNavigate();
  const pl = async (event) => {
    event.preventDefault();
    let oT = [];
    food_list.map((items) => {
      if (ct[items._id] > 0) {
        let itemInfo = items;
        itemInfo["quantity"] = ct[items._id];
        oT.push(itemInfo);
      }
    });
    console.log(oT);
    let od = {
      address: data,
      items: oT,
      email: data.email,
    };
    let rs = await axios.post(url + "/api/order/place", od, {
      headers: { token },
    });
    if (rs.data.success) {
      const { session_url } = rs.data;
      window.location.replace(session_url);
    } else {
      alert("Error");
    }
  };
  // useEffect(() => {
  //   if (!token) {
  //     nav("/ct");
  //   } else if (gtc() === 0) {
  //     nav("/ct");
  //   }
  // }, [token]);
  return (
    <form onSubmit={pl} className="pl">
      <div className="pdl">
        <p className="title">Delivery Information</p>
        <div className="mf">
          <input
            required
            type="text"
            placeholder="First Name"
            value={data.firstName}
            name="firstName"
            onChange={onc}
          />
          <input
            required
            type="text"
            placeholder="Last Name"
            name="lastName"
            value={data.lastName}
            onChange={onc}
          />
        </div>
        <input
          required
          type="email"
          placeholder="Email address"
          name="email"
          value={data.email}
          onChange={onc}
          className="ip"
        />
        <input
          required
          type="text"
          placeholder="Street"
          value={data.street}
          name="street"
          onChange={onc}
          className="ip"
        />
        <div className="mf">
          <input
            required
            type="text"
            placeholder="City "
            name="city"
            value={data.city}
            onChange={onc}
          />
          <input
            required
            type="text"
            placeholder="State"
            name="state"
            value={data.state}
            onChange={onc}
          />
        </div>
        <div className="mf">
          <input
            required
            type="text"
            placeholder="Zip code"
            value={data.zipcode}
            name="zipcode"
            onChange={onc}
          />
          <input
            required
            type="text"
            placeholder="Country"
            value={data.country}
            name="country"
            onChange={onc}
          />
        </div>
        <input
          required
          type="text"
          placeholder="Phone"
          value={data.phone}
          name="phone"
          onChange={onc}
        />
      </div>
      <div className="pdr">
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
          <button type="submit">PROCEED TO PAYMENT</button>
        </div>
      </div>
    </form>
  );
};

export default Order;
