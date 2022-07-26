import React, { useState } from "react";

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    return (
      <div className="background">
        <div className="loginBox" id="loginBox">
          <h2 className="title">LOG IN</h2>
          <form name="login">
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
            <button className="log" value="Login" id="login" type="submit"> Login </button>
            <p className="p">Don' have an account?</p>
            <h6 role="button" className="back" >Sign up</h6>
        </form>
        </div>
      </div>
    );
}
  
export default Login;