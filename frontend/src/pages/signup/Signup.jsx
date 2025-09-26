import React from 'react'
import GenderCheckbox from './GenderCheckbox'
import { Link } from "react-router-dom";
import { useState } from 'react';
import useSignup from '../../hooks/useSignup';
import LoadingSpinner from '../../components/LoadingSpinner';

const SignUp = () => {
    const [inputs,setInputs] = useState({
        fullName: '',
        username: '',
        password: '',
        confirmPassword:'',
        gender: ''
    })

    const {loading, signup} = useSignup();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await signup(inputs)
    }

    const handleCheckboxChange = (gender) => {
        setInputs({...inputs,gender})
    }
  return (
    <div>
      <div className="login-container">
      <div className="login-box">
        <h1 className="login-title">
          Sign Up <span className="chatapp-name">ChatApp</span>
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter fullname"
              className="form-input" 
              value={inputs.fullName} onChange={(e) => setInputs({...inputs,fullName: e.target.value})}
            />
            <label className="form-label">
              Username
            </label>
            <input
              type="text"
             
              placeholder="Enter username"
              className="form-input"
              value={inputs.username} onChange={(e) => setInputs({...inputs,username: e.target.value})}
            />
             <label className="form-label">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter password"
              className="form-input"
              value={inputs.password} onChange={(e) => setInputs({...inputs,password: e.target.value})}
            />
             <label  className="form-label">
              Password
            </label>
            <input
              type="password"
             
              placeholder="Confirm password"
              className="form-input"
              value={inputs.confirmPassword} onChange={(e) => setInputs({...inputs,confirmPassword: e.target.value})}
            />
            <GenderCheckbox onCheckboxChange = {handleCheckboxChange} selectGender={inputs.gender} />
            <Link to='/login'>
            <label className="form-label additional-button">
              Already have an account?
            </label></Link>
            <button className="login-button"
             disabled={loading}>{loading ? <LoadingSpinner /> : "Sign Up"}</button>
          </div>
        </form>
      </div>
    </div>
    </div>
  )
}

export default SignUp
