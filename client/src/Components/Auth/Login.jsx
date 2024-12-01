import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const Login = () => {
  const [hidePassword, setHidePassword] = useState(true);

  return (
    <div className="loginPage">
      <h2>Log In</h2>
      <form action="#" method="post" className="loginForm">
        {/* Email Input */}
        <label htmlFor="email" className="loginLabel">Enter your email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="xyz@mail.com"
          className="loginMail-Input"
          required
        />

        {/* Password Input */}
        <label htmlFor="password" className="loginLabel">Enter your password</label>
        <div className="loginPassword-Input-wrapper">
          <input
            type={hidePassword ? "password" : "text"}
            id="password"
            name="password"
            placeholder="Enter your password"
            className="loginPassword-Input"
            required
          />
          <FontAwesomeIcon
            icon={hidePassword ? faEyeSlash : faEye}
            onClick={() => setHidePassword((prev) => !prev)}
            className="passwordToggleIcon"
          />
        </div>

        <button type="submit" className="loginButton">Log In</button>
      </form>
    </div>
  );
};

export default Login;
