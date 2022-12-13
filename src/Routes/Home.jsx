import React from "react";
import style from "../Styles/Home.module.css";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { useEffect } from "react";
import { getSlideImageRequest, slideChange } from "../Reducer/actionCreater";
import { useContext } from "react";
import { AppContext } from "../Context/AppContextProvider";

export const Home = () => {
  const { state, dispatch } = useContext(AppContext);
  useEffect(() => {
    getSlideImageRequest("slides", dispatch);
  }, []);

  return (
    <>
      <div className={style.heading_wrapper}>
        <h1>Home Page</h1>
      </div>
      {state.slides && (
        <div className={style.slide_container}>
          <div>
            <AiOutlineLeft
              onClick={() => slideChange("LEFT", dispatch, state)}
            />
          </div>
          <div>
            <img src={state.slides[state.currentSlide]} alt="" />
          </div>
          <div>
            <AiOutlineRight
              onClick={() => slideChange("RIGHT", dispatch, state)}
            />
          </div>
        </div>
      )}
      <div className={style.heading_wrapper}>
        {state.currentSlide === 0 && <h1>Minimum 50% Discount</h1>}
        {state.currentSlide === 1 && <h1>Hurry up! 60% Discount</h1>}
        {state.currentSlide === 2 && <h1>Hurry up! 70% Discount</h1>}
        {state.currentSlide === 3 && <h1>Hurry up! 80% Discount</h1>}
        {state.currentSlide === 4 && <h1>Hurry up! 85% Discount</h1>}
      </div>
    </>
  );
};
