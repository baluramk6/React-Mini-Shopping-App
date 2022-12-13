import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../Context/AppContextProvider";
import { placeOrder } from "../Reducer/actionCreater";
import style from "../Styles/Payment.module.css";

export const Payment = () => {
  const { state, dispatch } = useContext(AppContext);
  const navigate = useNavigate();
  return (
    <div className={style.main_container}>
      <div className={style.payment_wrapper}>
        <div>
          <h2>Checkout</h2>
        </div>
        <div className={style.input_wrapper}>
          <div>
            <label htmlFor="">Card number</label>
            <input type="text" placeholder="Debit or Credit" required />
          </div>
          <div>
            <label htmlFor="">Expiry date</label>
            <input type="text" placeholder="DD/MM" required />
          </div>
          <div>
            <label htmlFor="">CVC</label>
            <input type="text" placeholder="Enter cvc number" required />
          </div>
        </div>
        <div>
          <button onClick={() => placeOrder("cartitem", dispatch, navigate)}>
            Pay Now {state.checkoutData[0].total}
          </button>
        </div>
      </div>
    </div>
  );
};
