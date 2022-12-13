import React, { useContext, useEffect } from "react";
import { AppContext } from "../Context/AppContextProvider";
import style from "../Styles/Checkout.module.css";
import { getCheckoutdetails, saveFormData } from "../Reducer/actionCreater";
import { useNavigate } from "react-router-dom";

export const Checkout = () => {
  const { state, dispatch } = useContext(AppContext);
  const navigate = useNavigate();
  useEffect(() => {
    getCheckoutdetails("checkout", dispatch);
  }, [state.cartitem]);

  return (
    <div>
      <div className={style.main_container}>
        <div className={style.left_container}>
          <div className={style.heading_wrapper}>
            <h1>Your Details</h1>
          </div>
          <div>
            <form
              onSubmit={(e) =>
                saveFormData(e, "userdetails", navigate, {
                  firstName: state.firstName,
                  lastname: state.lastName,
                  formEmail: state.formEmail,
                  mobile: state.mobile,
                  address: state.address,
                  city: state.city,
                  country: state.country,
                })
              }
            >
              <div className={style.h_flex}>
                <div className={style.v_flex}>
                  <label htmlFor="">First Name</label>
                  <input
                    className={style.input_style}
                    type="text"
                    placeholder="Enter your first name"
                    value={state.firstName}
                    required
                    onChange={(e) =>
                      dispatch({
                        type: "FIRSTNAME_ONCHANGE",
                        payload: e.target.value,
                      })
                    }
                  />
                </div>
                <div className={style.v_flex}>
                  <label htmlFor="">Last Name</label>
                  <input
                    className={style.input_style}
                    type="text"
                    placeholder="Enter your last name"
                    value={state.lastName}
                    required
                    onChange={(e) =>
                      dispatch({
                        type: "LASTNAME_ONCHANGE",
                        payload: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
              <div className={style.v_flex}>
                <label htmlFor="">Email</label>
                <input
                  className={style.input_style}
                  type="email"
                  placeholder="Email"
                  value={state.formEmail}
                  required
                  onChange={(e) =>
                    dispatch({
                      type: "FORM_EMAIL_ONCHANGE",
                      payload: e.target.value,
                    })
                  }
                />
              </div>
              <div className={style.v_flex}>
                <label htmlFor="">Mobile</label>
                <input
                  className={style.input_style}
                  type="tel"
                  placeholder="Mobile"
                  value={state.mobile}
                  required
                  minLength="10"
                  maxLength="10"
                  onChange={(e) =>
                    dispatch({
                      type: "MOBILE_ONCHANGE",
                      payload: e.target.value,
                    })
                  }
                />
              </div>
              <div className={style.v_flex}>
                <label htmlFor="">Address</label>
                <input
                  type="text"
                  className={style.input_style}
                  placeholder="Address"
                  value={state.address}
                  required
                  onChange={(e) =>
                    dispatch({
                      type: "ADDRESS_ONCHANGE",
                      payload: e.target.value,
                    })
                  }
                />
              </div>
              <div className={style.h_flex}>
                <div className={style.v_flex}>
                  <label htmlFor="">City</label>
                  <input
                    className={style.input_style}
                    type="text"
                    placeholder="Enter your first name"
                    value={state.city}
                    required
                    onChange={(e) =>
                      dispatch({
                        type: "CITY_ONCHANGE",
                        payload: e.target.value,
                      })
                    }
                  />
                </div>
                <div className={style.v_flex}>
                  <label htmlFor="">Country</label>
                  <select
                    className={style.input_style}
                    name=""
                    id=""
                    value={state.country}
                    required
                    onChange={(e) =>
                      dispatch({
                        type: "COUNTRY_ONCHANGE",
                        payload: e.target.value,
                      })
                    }
                  >
                    <option value="India">India</option>
                    <option value="USA">USA</option>
                    <option value="UK">United Kingdom</option>
                    <option value="Nepal">Nepal</option>
                    <option value="Canada">Canada</option>
                  </select>
                </div>
              </div>
              <div className={style.submit_btn_wrapper}>
                <button type="submit">Payment</button>
              </div>
            </form>
          </div>
        </div>
        <div className={style.right_wrapper}>
          <div className={style.heading_wrapper}>
            <h2>Order Details</h2>
          </div>
          <div className={style.price_wrapper}>
            {state.checkoutData?.map((e, i) => {
              return (
                <div key={e + i}>
                  <p>
                    <strong>Total Items:</strong>
                    {e.totalItem}
                  </p>
                  <p>
                    <strong>Total Price:</strong>
                    ₹: {e.totalPrice}
                  </p>
                  <p>
                    <strong>
                      Discount:<span> 20%</span>
                    </strong>

                    {`₹:${e.discount}`}
                  </p>
                  <p>
                    <strong>Shipping Charge:</strong>
                    ₹: {e.shippingCharge}
                  </p>
                  <hr />
                  <p>
                    <strong>Total:</strong>₹{e.total}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
