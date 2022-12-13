import React from "react";
import { useContext } from "react";
import style from "../Styles/Login.module.css";
import { AppContext } from "../Context/AppContextProvider";
import { login } from "../Reducer/actionCreater";
import { useNavigate, Link } from "react-router-dom";

export const Login = () => {
  const { state, dispatch } = useContext(AppContext);
  const navigate = useNavigate();
  // const url = "https://reqres.in/api/login";
  const url = "http://localhost:8080/user_register";
  return (
    <div className={style.main_container}>
      <div>
        <h1 className={style.heading}>Sign in with email</h1>
      </div>
      <div className={style.form_wrapper}>
        <div>
          <label htmlFor="">Email</label>
          <input
            type="text"
            placeholder="Email"
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
            placeholder="Password"
            value={state.password}
            onChange={(e) =>
              dispatch({ type: "PASSWORD_ONCHANGE", payload: e.target.value })
            }
          />
        </div>
        <div>
          <button
            onClick={() =>
              login(
                { email: state.email, password: state.password },
                dispatch,
                url,
                navigate
              )
            }
          >
            Login
          </button>
        </div>
        <div>
          <p>
            Don't have an account <Link to="/signup">Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};
