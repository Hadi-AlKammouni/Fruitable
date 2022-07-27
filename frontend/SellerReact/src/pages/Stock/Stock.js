import { useState, useEffect } from "react";
import { useGrocery } from "../../context/grocery";

const Stock = () => {

  const {groceryItems} = useGrocery()

  const getItems = async () => {
    try {
      console.log(groceryItems)
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getItems()
  }, [groceryItems]);

    return (
      <div> Stock!</div>
    );
}
  
export default Stock;  