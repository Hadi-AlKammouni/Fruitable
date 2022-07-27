import React, { useState, useEffect } from "react";
import './styles.css'
import constants from "../../constants";
import {useNavigate} from 'react-router-dom';

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    // Login
    const logIn = async () => {
      try{
        if(!(email && password)){
          alert("Both Fields Must Be Filled.")
        } else{
          const response = await fetch(`${constants.fetch_url}login`, {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                  email: email,
                  password: password
              })
          });
          const data = await response.json();
          if(data._id){
            localStorage.setItem("_id",data._id)
            localStorage.setItem("token",data.token)
            navigate('/home')
          }
        }

        } catch (error) {
          alert("Wrong email and / or password.")
          console.log(error)
        }
    }

    // Check if the is logged in
    // If yes, navigate to home page directly
    const isToken = () => {
      const token_storage = localStorage.getItem('token')
      if(token_storage){
        navigate('/home')
      }
    }

    useEffect(() => {
      isToken()
    }, []);

    return (
      <div className="background">
        <div className="loginBox" id="loginBox">
          <h2 className="title">LOG IN</h2>
          <div>
            <div className="inputBox">
              <label className="logColor">Email</label>
              <input
                id="email"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <label className="logColor">Password</label>
              <input
                id="password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button className={!(email && password) ? "disable" : "log"} value="Login" id="login" onClick={logIn}> Login </button>
            <p className="p">Don' have an account?</p>
            <h6 role="button" className="back" >Sign up</h6>
        </div>
        </div>
      </div>
    );
}
  
export default Login;