import React from "react";

const Select = ( {set}) => {

    const categories = ["Fruits","Vegetables"];

    return (
        <>
            <select onChange={(e) => {set(e.target.value)}}>
                 <option value={""}>--SELECT ITEM CATEGORY--</option>
                {categories.map((category, index) => (
                <option key={index} value={category}>{category}</option>
                ))};                
            </select>
        </>
    )
}

export default Select;