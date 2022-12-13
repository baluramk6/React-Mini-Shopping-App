import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../Context/AppContextProvider";
import style from "../Styles/Navbar.module.css";
import { AiFillHome, AiFillShopping } from "react-icons/ai";
import { BsFillCartFill } from "react-icons/bs";
import { FaUserCheck } from "react-icons/fa";
export const Navbar = () => {
  const { state, dispatch } = useContext(AppContext);

  // const navlink = [
  //   {
  //     title: "Home",
  //     path: "/",
  //   },
  //   {
  //     title: "Product",
  //     path: "/product",
  //   },
  // ];

  return (
    <div className={style.main_container}>
      <div>
        <Link to="/">
          <img src="https://img.icons8.com/external-anggara-filled-outline-anggara-putra/64/000000/external-shopping-bag-cyber-monday-anggara-filled-outline-anggara-putra-2.png" />
        </Link>
        <div>
          <Link to="/">
            <p>Masai</p>
            <span>Mart</span>
          </Link>
        </div>
      </div>
      <div>
        <ul>
          <li>
            <Link to="/">
              <AiFillHome />
            </Link>
          </li>
          <li>
            <Link to="/product">
              <AiFillShopping />
            </Link>
          </li>
          <li>
            <Link to="/cart">
              <BsFillCartFill />
              {state.cartProduct && <span> {state.cartProduct.length}</span>}
            </Link>
          </li>
          {state.isAuth ? (
            <li>
              <Link onClick={() => dispatch({ type: "LOGOUT" })} to="/login">
                Logout
              </Link>
            </li>
          ) : (
            <li>
              <Link to="/login">Login</Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};
