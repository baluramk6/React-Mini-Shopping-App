import React from "react";
import style from "../Styles/Footer.module.css";

export const Footer = () => {
  return (
    <div className={style.main_container}>
      <p className={style.footer_heart}>
        Made with
        <g-emoji
          className={style.g_emoji}
          alias="heart"
          fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/2764.png"
        >
          <img
            className={style.emoji}
            alt="heart"
            height="20"
            width="20"
            src="https://github.githubassets.com/images/icons/emoji/unicode/2764.png"
          ></img>
        </g-emoji>
        by <a href="https://github.com/baluramk6">Baluram</a>
      </p>
    </div>
  );
};
