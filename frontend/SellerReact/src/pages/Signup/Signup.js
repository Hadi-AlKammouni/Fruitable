import React, { useState, useEffect } from "react";
import {useNavigate} from 'react-router-dom';
import Image from "../../components/Image";

const Signup = () => {

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [image, setImage] = useState("");
    const navigate = useNavigate();

    return (
      <div>
        <div >
          <h2 >SIGN UP</h2>
          <div>
            <div>
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
              <label >Email</label>
              <input
                id="email"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <label >Password</label>
              <input
                id="password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <Image set={setImage} />

            <button className={!(email && password && name && description && image) ? "disable" : "log"} value="Submit" id="login" > Signup </button>
            <p >Already a member?</p>
            <h6 role="button"onClick={()=>navigate("/")}>Login</h6>
        </div>
        </div>
      </div>
    );
}
  
export default Signup;