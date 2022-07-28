import Input from "../../components/Input";
import Image from "../../components/Image";
import { useState } from "react";

const AddItem = () => {

    // Initialize Input State
    const [item_name, setName] = useState("");
    const [item_qauntity, setQuantity] = useState("");
    const [item_price, setPrice] = useState("");
    const [item_image, setImage] = useState("");

    //Add data to Backend on Submit
    const onSubmit = (e) => {
        e.preventDefault();
        if ( item_name === "" || item_qauntity === "" || item_price === "" || item_image ) {
            alert("Please fill all fields!");
            return;
        }
        
        // submititem({ item_name, item_quantity, item_price, item_image })
        setName("");
        setQuantity("");
        setPrice("");
        setImage("");
    };

    return (
      <form className="add-form" onSubmit={onSubmit}>

        <Input type={"text"} placeholder={"Enter name here"} label={"Item Name"} set={setName} />
        <Input type={"number"} placeholder={"Enter quantity here"} label={"Item Qauntity (Kg)"} set={setQuantity} />
        <Input type={"number"} placeholder={"Enter price here"} label={"Item Price"} set={setPrice} />
        <Image set={setImage} />

        <input type={"submit"} value="Add Item" className="btn btn-block" />

      </form>
    );
}
  
export default AddItem;  