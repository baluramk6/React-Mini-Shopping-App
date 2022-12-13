import React from "react";
import style from "../Styles/ProductCard.module.css";
import { Link } from "react-router-dom";
import { AppContext } from "../Context/AppContextProvider";
import { useContext } from "react";
import { addToCart } from "../Reducer/actionCreater";

export const ProductCard = ({ item }) => {
  const { state, dispatch } = useContext(AppContext);

  return (
    <div className={style.main_container}>
      <div className={style.product_wrapper} key={item.id}>
        <div>
          <Link to={`/product/${item.id}`}>
            <img src={item.thumbnail} alt="" />
          </Link>
        </div>
        <div>
          <h4>{item.title}</h4>
        </div>
        <div>
          <p>{`₹${item.price}`}</p>
          <p>{`Category: ${item.category}`}</p>
        </div>
        <div>
          <p>{`Rating: ${item.rating}`}</p>
        </div>
        <div>
          <button onClick={() => addToCart("cartitem", dispatch, item)}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};
