import React,{useState} from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";
import LoadingSpinner from "../../components/LoadingSpinner";

const Login = () => {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const {loading,login} = useLogin()

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(username,password)
  }
  return (
    <div className="login-container">
      <div className="login-box">
        <h1 className="login-title">
          Login <span className="chatapp-name">ChatApp</span>
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              type="text"
              id="username"
              placeholder="Enter username"
              className="form-input"
              value ={username} onChange={(e)=> setUsername(e.target.value)}
            />
             <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter password"
              className="form-input"
              value ={password} onChange={(e)=> setPassword(e.target.value)}
            />
           <Link to='/signup'> <label className="form-label additional-button">
              Don't have an account?
            </label></Link>
            <button className="login-button" disabled={loading}>{loading ? <LoadingSpinner /> : "Login"}</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
