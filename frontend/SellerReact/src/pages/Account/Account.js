import Input from "../../components/Input";
import Image from "../../components/Image";
import React, { useEffect, useState } from "react";
import './styles.css';
import constants from "../../constants/constants";
import { useNavigate } from "react-router-dom";
import { useGrocery } from "../../context/grocery";
import {toast} from 'react-toastify';

const Account = () => {

    // Initialize Input State
    const [name, setName] = useState(null);
    const [description, setDescription] = useState(null);
    const [number, setNumber] = useState(null);
    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);
    const [image, setImage] = useState(null);
    const groceryToken = localStorage.getItem('token');
    const groceryId = localStorage.getItem('_id');

    const {
        setGroceryName, 
        setGroceryPhoneNumber,
        setGroceryDescription, 
        setGroceryLatitude,
        setGroceryLongitude, 
        setGroceryPicture} = useGrocery()

    const navigate = useNavigate();
    
    const upDateAccount = async () => {
      try {
        if(name){
            const response = await fetch(`${constants.fetch_url}update_account?id=${groceryId}`, {
                method: 'POST',
                headers: {
                  'x-access-token': groceryToken,
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  name: name,
                })
            });
            var data = await response.json();
            localStorage.setItem('name',name)
            setGroceryName(name)
        }
        if(description){
            const response = await fetch(`${constants.fetch_url}update_account?id=${groceryId}`, {
                method: 'POST',
                headers: {
                  'x-access-token': groceryToken,
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  description: description,
                })
            });
            var data = await response.json();
            localStorage.setItem('phone_number',number)
            setGroceryPhoneNumber(number)
        }
        if(number){
            const response = await fetch(`${constants.fetch_url}update_account?id=${groceryId}`, {
                method: 'POST',
                headers: {
                  'x-access-token': groceryToken,
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  number: number,
                })
            });
            var data = await response.json();
            localStorage.setItem('description',description)
            setGroceryDescription(description)
        }
        if(latitude){
            const response = await fetch(`${constants.fetch_url}update_account?id=${groceryId}`, {
                method: 'POST',
                headers: {
                  'x-access-token': groceryToken,
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  latitude: latitude,
                })
            });
            var data = await response.json();
            localStorage.setItem('latitude',latitude)
            setGroceryLatitude(latitude)
        }
        if(longitude){
            const response = await fetch(`${constants.fetch_url}update_account?id=${groceryId}`, {
                method: 'POST',
                headers: {
                  'x-access-token': groceryToken,
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  longitude: longitude,
                })
            });
            var data = await response.json();
            localStorage.setItem('longitude',longitude)
            setGroceryLongitude(longitude)
        }
        if(image){
            const response = await fetch(`${constants.fetch_url}update_account?id=${groceryId}`, {
                method: 'POST',
                headers: {
                  'x-access-token': groceryToken,
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  picture: image,
                })
            });
            var data = await response.json();
            localStorage.setItem('picture',image)
            setGroceryPicture(image)
        }
        toast.success(`${data.message}`,{position: toast.POSITION.TOP_CENTER}, {autoClose:2000})
        setTimeout(function(){
          window.location.reload();
        }, 5000);
        
      } catch (error){
          toast.error('Something went wrong.',{position: toast.POSITION.TOP_CENTER}, {autoClose:2000})
          console.log(error)
      }
    };

    //Add data to Backend on Submit
    const onSubmit = (e) => {
        e.preventDefault();
        if(!(name || description || number || latitude || longitude || image)){
          toast.warning("You didn't make any change",{position: toast.POSITION.TOP_CENTER}, {autoClose:2000})
        } else {
            upDateAccount()
        }
    };

    return (
      <form className="add-form" onSubmit={onSubmit}>

        <Input type={"text"} placeholder={"Enter name here"} label={"Grocery Name"} set={setName} />
        <Input type={"text"} placeholder={"Enter description here"} label={"Grocery Description"} set={setDescription} />
        <Input type={"number"} placeholder={"Enter number here"} label={"Grocery Number"} set={setNumber} />
        <Input type={"number"} placeholder={"Enter latitude here"} label={"Grocery Latitude"} set={setLatitude} />
        <Input type={"number"} placeholder={"Enter longitude here"} label={"Grocery Longitude"} set={setLongitude} />
        <Image set={setImage} />

        <input type={"submit"} value="Update Account" className="btn btn-block" />

      </form>
    );
}
  
export default Account;