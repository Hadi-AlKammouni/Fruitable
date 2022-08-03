import Input from "../../components/Input";
import Image from "../../components/Image";
import React, { useEffect, useState } from "react";
import Select from "../../components/Select";
import './styles.css';
import constants from "../../constants";
import { useNavigate } from "react-router-dom";


const AddItem = () => {

    // Initialize Input State
    const [item_name, setName] = useState("");
    const [item_qauntity, setQuantity] = useState("");
    const [item_price, setPrice] = useState("");
    const [item_image, setImage] = useState("");
    const [item_category, setCategory] = useState("");
    const groceryToken = localStorage.getItem('token')
    const groceryId = localStorage.getItem('_id')
    const navigate = useNavigate();
    
    //Calling add_item endpoint
    const addItem = async (item_name, item_price, item_qauntity, item_image, item_categor) => {
      try {
        const response = await fetch(`${constants.fetch_url}add_item`, {
            method: 'POST',
            headers: {
              'x-access-token': groceryToken,
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              name: item_name,
              price: item_price,
              quantity: item_qauntity,
              picture: item_image,
              category: item_category,
              grocery: groceryId
            })
        });
        const data = await response.json();
        if(data._id){
          alert("Item has been added successfully ✅");
          navigate("/")
        }
      
      } catch (error){
          console.log(error)
      }
    };

    //Add data to Backend on Submit
    const onSubmit = (e) => {
        e.preventDefault();
        if ( item_name === "" || item_qauntity === "" || item_price === "" || item_image === "" || item_category === "" ) {
            alert("Please fill all fields!");
            return;
        }
        setName("");
        setQuantity("");
        setPrice("");
        setImage("");
        setCategory("");
        addItem(item_name, item_price, item_qauntity, item_image, item_category)
      };

    return (
      <form className="add-form" onSubmit={onSubmit}>

        <Input type={"text"} placeholder={"Enter name here"} label={"Item Name"} set={setName} />
        <Input type={"number"} placeholder={"Enter quantity here"} label={"Item Qauntity (Kg)"} set={setQuantity} />
        <Input type={"number"} placeholder={"Enter price here"} label={"Item Price (LBP)"} set={setPrice} />
        <div className="select">
          <Select set={setCategory} />
        </div>
        <Image set={setImage} />

        <input type={"submit"} value="Add Item" className="btn btn-block" />

      </form>
    );
}
  
export default AddItem;  