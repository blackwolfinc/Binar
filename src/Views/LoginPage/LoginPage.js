import React from "react";
import "./LoginPage.css";

export const LoginPage = () => {
  return (
    <div className="bapak">
      <div className="bagianKiri"> kiri</div>
      <div className="bagianKanan">
        <h1> Welcome admin BCA</h1>
        <h5>email</h5>
        <input type="text" />
        <h5>password</h5>
        <input type="password" />
        <button>Sign Up</button>
      </div>
    </div>
  );
};
