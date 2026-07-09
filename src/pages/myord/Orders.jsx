import React, { useContext, useEffect, useState } from "react";
import "./od.css";
import { sc } from "../../components/context/Context";
import axios from "axios";
import { assets } from "../../assets/assets/frontend_assets/assets";

const Orders = () => {
  const delOrder = async (orderId) => {
    try {
      // Call backend to delete order
      await axios.post(
        url + "/api/order/delete", // make sure your backend route exists
        { orderId },
        { headers: { token } },
      );

      // Remove it from state locally
      sdt((prev) => prev.filter((order) => order._id !== orderId));
      console.log("Order deleted:", orderId);
    } catch (err) {
      console.error("Failed to delete order:", err);
    }
  };
  const [dt, sdt] = useState([]);
  const { token, url } = useContext(sc);
  const fd = async () => {
    const rs = await axios.post(
      url + "/api/order/usersorder",
      {},
      { headers: { token } },
    );
    sdt(rs.data.data);
    console.log(rs.data.data);
  };
  useEffect(() => {
    if (token) {
      fd();
    }
  }, [token]);
  return (
    <div>
      <div className="md">
        <h2>My Orders</h2>
        <div className="cont">
          {dt.map((sg, index) => {
            return (
              <div key={index} className="odd">
                <img src={assets.parcel_icon} alt="" />
                <p>
                  {sg.items.map((sn, index) => {
                    if (index == sg.items.length - 1) {
                      return sn.name + "x" + sn.quantity;
                    } else {
                      return sn.name + "x" + sn.quantity + ",";
                    }
                  })}
                </p>
                <p>${sg.amount}.00</p>
                <p>Items: {sg.items.length}</p>
                <p>
                  <span>
                    &#x25cf; <b>{sg.status}</b>
                  </span>
                </p>
                <button onClick={fd}>Track Order</button>
                <button onClick={() => delOrder(sg._id)}>Delete Order</button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Orders;
