import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { AppContext } from "../Context/AppContextProvider";
import { Link, useNavigate } from "react-router-dom";
import {
  getCartProduct,
  removeFromCart,
  changeQuantity,
  checkout,
} from "../Reducer/actionCreater";
import style from "../Styles/CartItem.module.css";
import { TiDeleteOutline } from "react-icons/ti";

export const CartItem = () => {
  const { state, dispatch } = useContext(AppContext);

  const navigate = useNavigate();

  const totalPrice = state.cartProduct?.reduce(
    (total, num) => total + num.price * num.qty,
    0
  );

  const totalItem = state.cartProduct?.reduce((v1, v2) => v1 + v2.qty, 0);

  const dis = (totalPrice, per) => {
    return (totalPrice / 100) * per;
  };
  const discount = Math.floor(dis(totalPrice, 20));

  const shipping = (totalPrice, per) => {
    return (totalPrice / 100) * per;
  };
  const shippingCharge = Math.floor(shipping(totalPrice, 5));

  const total = totalPrice - discount + shippingCharge;

  useEffect(() => {
    getCartProduct("cartitem", dispatch);
  }, []);
  return (
    <div className={style.main_container}>
      <div className={style.heading_wrapper}>
        <h1>Cart Item</h1>
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>TotalPrice</th>
            </tr>
          </thead>
        </table>
      </div>
      <hr />
      <div className={style.cart_container}>
        {state.cartProduct?.map((item) => {
          return (
            <div key={item.id}>
              <div className={style.item_wrapper}>
                <div className={style.image_wrapper}>
                  <div className={style.remove_btn_wrapper}>
                    <TiDeleteOutline
                      onClick={() =>
                        removeFromCart("cartitem", item.id, dispatch)
                      }
                    />
                  </div>
                  <img src={item.thumbnail} alt="" />
                  <div className={style.title_wrapper}>
                    <p>{item.category}</p>
                    <h2>{item.title}</h2>
                    <p>{item.brand}</p>
                  </div>
                </div>
                <div>
                  <p>{`₹${item.price}`}</p>
                </div>
                <div>
                  <p>{item.qty}</p>
                  <button
                    disabled={item.qty === 1}
                    onClick={() =>
                      changeQuantity(item.id, "cartitem", dispatch, {
                        ...item,
                        qty: item.qty - 1,
                      })
                    }
                  >
                    -
                  </button>

                  <button
                    onClick={() =>
                      changeQuantity(item.id, "cartitem", dispatch, {
                        ...item,
                        qty: item.qty + 1,
                      })
                    }
                  >
                    +
                  </button>
                </div>
                <div>
                  <p>{`₹${item.price * item.qty}`}</p>
                </div>
              </div>
            </div>
          );
        })}
        <div className={style.checkout_btn_wrapper}>
          <h3>Total: {totalPrice}</h3>
          <button
            onClick={() =>
              checkout("checkout", navigate, dispatch, {
                totalPrice,
                discount,
                shippingCharge,
                total,
                totalItem,
              })
            }
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};
