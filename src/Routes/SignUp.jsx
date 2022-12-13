import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../Context/AppContextProvider";
import { signup } from "../Reducer/actionCreater";
import style from "../Styles/SignUp.module.css";

export const SignUp = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useContext(AppContext);

  return (
    <div className={style.main_container}>
      <div>
        <h1 className={style.heading}>Register with us</h1>
      </div>
      <div className={style.form_wrapper}>
        <div>
          <label htmlFor="">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={state.email}
            onChange={(e) =>
              dispatch({ type: "EMAIL_ONCHANGE", payload: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={state.password}
            onChange={(e) =>
              dispatch({ type: "PASSWORD_ONCHANGE", payload: e.target.value })
            }
          />
        </div>
        <div>
          <button
            onClick={() =>
              signup("user_register", dispatch, navigate, {
                email: state.email,
                password: state.password,
              })
            }
          >
            Register
          </button>
        </div>
        <div>
          <p>
            Already have an account <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};
