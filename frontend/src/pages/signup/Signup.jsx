import React from 'react'
import GenderCheckbox from './GenderCheckbox'

const Signup = () => {
  return (
    <div>
      <div className="login-container">
      <div className="login-box">
        <h1 className="login-title">
          Sign Up <span className="chatapp-name">ChatApp</span>
        </h1>
        <form>
          <div className="form-group">
            <label htmlFor="username" className="form-label">
              Full Name
            </label>
            <input
              type="text"
              id="username"
              placeholder="Enter fullname"
              className="form-input"
            />
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
             <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Confirm password"
              className="form-input"
            />
            <GenderCheckbox />
            <label htmlFor="password" className="form-label additional-button">
              Already have an account?
            </label>
            <button className="login-button">Signup</button>
          </div>
        </form>
      </div>
    </div>
    </div>
  )
}

export default Signup
