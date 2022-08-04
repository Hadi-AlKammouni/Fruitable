import React, { useState } from "react";
import {useNavigate} from 'react-router-dom';
import Image from "../../components/Image";
import './styles.css';
import instructions from '../../assets/instructions.png';
import constants from "../../constants/constants";
import {toast} from 'react-toastify';

const Signup = () => {

    const [image, setImage] = useState("");
    const [groceryInfo, setGroceryInfo] = useState("");
    const navigate = useNavigate();

    const signUp = async () => {
      try{
        if(!(image && groceryInfo)){
          toast.warning("Both Fields Must Be Filled.",{position: toast.POSITION.TOP_CENTER}, {autoClose:2000})
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
          if (data.status = "409"){
            toast.warning(`${data.message}.`,{position: toast.POSITION.TOP_CENTER}, {autoClose:2000})
          }
          if(data._id){
            localStorage.setItem("_id",data._id)
            localStorage.setItem("token",data.token)
            toast.success(`Welcome ${data.name}, start adding items to your stock.`,{position: toast.POSITION.TOP_CENTER}, {autoClose:2000})
            navigate('/reviews')
          }
        }

        } catch (error) {
          toast.error('Something went wrong, make that you are following the same layout.',{position: toast.POSITION.TOP_CENTER}, {autoClose:2000})
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
          <img src={instructions} alt=""/>
        </div>
      </div>
    );
}
  
export default Signup;