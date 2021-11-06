import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
  const register = () => {
    const { name, password } = user;
    axios.post("http://localhost:8000/register", user).then((res) => {
      alert(res.data.message);

      navigate("/login");
    });
  };

  return (
    <div className="login-container">
      <div className="login-section">
        <div className="login-form-section">
          <div className="login-form-title">
            <h1 className="login-title">NJORD</h1>
          </div>
          <div className="login-form-text">
            <div>
              <h1 className="login-company">Company Register</h1>
            </div>
            <div className="login-input-user">
              <input
                className="login-input-1"
                name="name"
                value={user.name}
                placeholder="Username"
                onChange={handleChange}
              ></input>
            </div>
            <div className="login-input-password">
              <input
                className="login-input-2"
                placeholder="Password"
                name="password"
                value={user.password}
                onChange={handleChange}
              ></input>
            </div>
            <div className="login-checkbox-section">
              <input className="login-input-3" type="checkbox"></input>
              <p className="login-remember">Remember me</p>
              <p className="login-forgot">Forgot Password?</p>
            </div>
            <div className="login-btn-section">
              {" "}
              <button className="login-btn" onClick={register}>
                Sign up
              </button>
            </div>
            <a href="www.google.com" className="login-term">
              Term & Conditions
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
