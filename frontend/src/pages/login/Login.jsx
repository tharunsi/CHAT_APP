import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <h1 className="login-title">
          Login <span className="chatapp-name">ChatApp</span>
        </h1>
        <form>
          <div className="form-group">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              type="text"
              id="username"
              placeholder="Enter username"
              className="form-input"
            />
             <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter password"
              className="form-input"
            />
            <label htmlFor="password" className="form-label additional-button">
              Don't have an account?
            </label>
            <button className="login-button">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
