import React from "react";
import { useEffect } from "react";
import { getProductRequest } from "../Reducer/actionCreater";
import style from "../Styles/Product.module.css";
import { ProductCard } from "../Components/ProductCard";
import { useContext } from "react";
import { AppContext } from "../Context/AppContextProvider";
import { Pagination } from "../Components/Pagination";
import { useSearchParams } from "react-router-dom";
export const Product = () => {
  const { state, dispatch } = useContext(AppContext);

  const [searchParam, setSearchParam] = useSearchParams();

  useEffect(() => {
    getProductRequest("products", dispatch, state);
    setSearchParam({ _page: state.page, _limit: state.limit });
  }, [state.page, state.limit]);

  return (
    <>
      <div className={style.heading_wrapper}>
        <h1>All Products</h1>
      </div>
      {state.isLoading && <h1>Loading</h1>}
      <div className={style.card_wrapper}>
        {state.products?.map((item) => {
          return <ProductCard key={item.id} item={item} />;
        })}
      </div>
      <div className={style.pagination_container}>
        <Pagination />
      </div>
    </>
  );
};
