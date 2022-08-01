import React, { useState } from "react";
import {useNavigate} from 'react-router-dom';
import Image from "../../components/Image";
import './styles.css';
import register from '../../assets/register.png';
import constants from "../../constants";

const Signup = () => {

    const [image, setImage] = useState("");
    const [groceryInfo, setGroceryInfo] = useState("");
    const navigate = useNavigate();

    const signUp = async () => {
      try{
        if(!(image && groceryInfo)){
          alert("Both Fields Must Be Filled.")
        } else{
          const response = await fetch(`${constants.fetch_url}register_OCR`, {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                  grocery_info: groceryInfo,
                  picture: image
              })
          });
          const data = await response.json();
          if(data._id){
            localStorage.setItem("_id",data._id)
            localStorage.setItem("token",data.token)
            navigate('/reviews')
          }
        }

        } catch (error) {
          alert("Something went wrong. Please try again.")
          console.log(error)
        }
      
    }

    return (
      <div className="background">
        <div className="signupBox" id="signupBox">
          <h2 className="title">SIGN UP</h2>
          <div>
            <h3 >Follow the instructions at right</h3>
            <Image set={setGroceryInfo} />
            <h3 >Grocery picture</h3>
            <Image set={setImage} />
            <button className={!(image && groceryInfo) ? "disable" : "log"} onClick={signUp}> Signup </button>
            <p className="p">Already a member?</p>
            <h6 role="button" className="back" onClick={()=>navigate("/")}>Login</h6>
          </div>
        </div>
        <div className="hintBox" id="hintBox">
          <h2 className="title">Instructions</h2>
          <img src={register} alt=""/>
        </div>
      </div>
    );
}
  
export default Signup;