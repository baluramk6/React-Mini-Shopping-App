import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../Context/AppContextProvider";
import { getSingleProduct, addToCart, buynow } from "../Reducer/actionCreater";
import style from "../Styles/SingleProduct.module.css";

export const SingleProduct = () => {
  const { state, dispatch } = useContext(AppContext);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getSingleProduct(dispatch, id, "products");
  }, []);
  const p = state.singleProduct;
  return (
    <div>
      <div className={style.heading_wrapper}>
        <h1>Product Details</h1>
      </div>
      <div>
        {p && (
          <div className={style.product_container}>
            <div className={style.image_wrapper}>
              <div>
                <img src={p.thumbnail} alt="" />
              </div>
              <div>
                <img src={p.images[0]} alt="" />
                <img src={p.images[1]} alt="" />
                <img src={p.images[2]} alt="" />
              </div>
            </div>
            <div>
              <h1>{p.title}</h1>
              <span>
                <strong>Brand: </strong>
                {p.brand}
              </span>
              <span>
                <strong>Price: </strong>
                {p.price}
              </span>
              <span>
                <strong>Category: </strong>
                {p.category}
              </span>
              <span>
                <strong>Rating: </strong>
                {p.rating}
              </span>
              <span>
                <strong>Description: </strong>
                <p>{p.description}</p>
              </span>
              <div className={style.btn_wrapper}>
                <button
                  className={style.cart_btn}
                  onClick={() => addToCart("cartitem", dispatch, p)}
                >
                  Add To Cart
                </button>
                <button
                  className={style.buy_btn}
                  onClick={() => buynow("cartitem", dispatch, p, navigate)}
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
