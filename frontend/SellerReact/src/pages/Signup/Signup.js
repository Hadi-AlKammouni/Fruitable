import React, { useState, useEffect } from "react";
import {useNavigate} from 'react-router-dom';
import Image from "../../components/Image";
import './styles.css';

const Signup = () => {

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [image, setImage] = useState("");
    const navigate = useNavigate();

    return (
      <div className="background">
        <div className="signupBox" id="signupBox">
          <h2 className="title">SIGN UP</h2>
          <div>
            <div className="inputBox">
              <label className="logColor">Name</label>
              <input
                id="name"
                type="name"
                onChange={(e) => setName(e.target.value)}
              />
              <label className="logColor">Description</label>
              <input
                id="description"
                type="description"
                onChange={(e) => setDescription(e.target.value)}
              />
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
            <Image set={setImage} />

            <button className={!(email && password && name && description && image) ? "disable" : "log"} value="Submit" id="signup" > Signup </button>
            <p className="p">Already a member?</p>
            <h6 role="button" className="back" onClick={()=>navigate("/")}>Login</h6>
        </div>
        </div>
      </div>
    );
}
  
export default Signup;