import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const sc = createContext(null);
const Sp = ({ children }) => {
  const [food_list, stf] = useState([]);
  const url = "http://localhost:4000";
  const [ct, sct] = useState({});
  const [token, stk] = useState("");
  const [rl, srl] = useState("");
  const ff = async () => {
    const rs = await axios.get(url + "/api/food/list");
    stf(rs.data.data);
  };

  const ac = async (itemId) => {
    const currentQty = ct[itemId] || 0;
    const newQty = currentQty + 1;

    sct((pv) => ({
      ...pv,
      [itemId]: newQty,
    }));

    if (token) {
      const rs = await axios.post(
        url + "/api/cart/add",
        {
          itemId,
          quantity: newQty,
        },
        { headers: { token } },
      );
      console.log(rs.data.message);
    }
  };
  const rv = async (itemId) => {
    sct((pv) => {
      const currentQty = pv[itemId] || 0;

      // If quantity will become 0 → remove item completely
      if (currentQty <= 1) {
        const newCart = { ...pv };
        delete newCart[itemId]; // 🔥 THIS is the key
        return newCart;
      }

      // Otherwise decrease normally
      return {
        ...pv,
        [itemId]: currentQty - 1,
      };
    });

    if (token) {
      await axios.post(
        url + "/api/cart/remove",
        { itemId },
        { headers: { token } },
      );
    }
  };
  const lc = async (token) => {
    const rs = await axios.post(
      url + "/api/cart/get",
      {},
      { headers: { token } },
    );
    sct(rs.data.cartData);
  };
  const gtc = () => {
    let tm = 0;
    for (const cm in ct) {
      if (ct[cm] > 0) {
        let it = food_list.find((pd) => pd._id === cm);
        tm += it.price * ct[cm];
      }
    }
    return tm;
  };

  useEffect(() => {
    async function ld() {
      await ff();
      if (localStorage.getItem("token")) {
        stk(localStorage.getItem("token"));
        srl(localStorage.getItem("role"));
        await lc(localStorage.getItem("token"));
      }
    }
    ld();
  }, []);
  const cv = {
    food_list,
    ct,
    sct,
    ac,
    rv,
    gtc,
    url,
    token,
    stk,
    rl,
    srl,
  };

  return <sc.Provider value={cv}>{children}</sc.Provider>;
};

export default Sp;
