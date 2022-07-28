import {useState,useEffect} from "react";

const Select = ( {set}) => {

    const categories = ["Fruits","Vegetables"];

    return (
        <>
            <select onChange={(e) => {set(e.target.value)}}>
                 <option value={""}>--SELECT ITEM CATEGORY--</option>
                {categories.map((category) => (
                <option value={category}>{category}</option>
                ))};                
            </select>
        </>
    )
}

export default Select;