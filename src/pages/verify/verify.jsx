import React, { useContext, useEffect } from "react";
import "./vf.css";
import { useNavigate, useSearchParams } from "react-router-dom";
import { sc } from "../../components/context/Context";
import axios from "axios";
const Verify = () => {
  const [sp, spc] = useSearchParams();
  const reference = sp.get("reference");
  const orderId = sp.get("orderId");

  const { url } = useContext(sc);
  const nav = useNavigate();
  const vp = async () => {
    const rs = await axios.post(url + "/api/order/verify", {
      reference,
      orderId,
    });
    if (rs.data.success) {
      nav("/myorders");
    } else {
      nav("/");
    }
  };
  useEffect(() => {
    vp();
  }, []);
  return (
    <div className="verify">
      <div className="spn"></div>
    </div>
  );
};

export default Verify;
