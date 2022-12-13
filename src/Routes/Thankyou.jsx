import React from "react";
import style from "../Styles/Thankyou.module.css";
import { Link } from "react-router-dom";

export const Thankyou = () => {
  return (
    <div className={style.main_container}>
      <h1>Order Received</h1>
      <h3>Thank for shopping with us</h3>
      <Link to="/">
        <button>Continue Shopping</button>
      </Link>
    </div>
  );
};
