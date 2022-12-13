import React from "react";
import { useContext } from "react";
import { AppContext } from "../Context/AppContextProvider";
import style from "../Styles/Pagination.module.css";
import { pageChange, limitChange } from "../Reducer/actionCreater";

export const Pagination = () => {
  const { state, dispatch } = useContext(AppContext);

  return (
    <div className={style.main_container}>
      <div className={style.button_wrapper}>
        <button onClick={() => pageChange("PREV", dispatch, state)}>
          Prev
        </button>
        <button>{state.page}</button>
        <button onClick={() => pageChange("NEXT", dispatch, state)}>
          Next
        </button>
      </div>
      <div className={style.select_wrapper}>
        <select
          name=""
          id="limit"
          onChange={(e) => limitChange(dispatch, e.target.value)}
        >
          <option value="">Limit</option>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
        </select>
      </div>
    </div>
  );
};
