import React, { useState, useEffect } from "react";
import constants from "../../constants";
import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import './styles.css'
import AddItem from '../AddItem/AddItem';
import { useGrocery } from "../../context/grocery";

const Stock = () => {

  const {groceryId} = useGrocery()

  const groceryItems = localStorage.getItem('items')
  const groceryToken = localStorage.getItem('token')
  const items = []

  const [rows,setRows] = useState([])
  const [toUpdate,setToUpdate] = useState(null)
  const [showBox,setShowBox] = useState(true)
  const [rowToRemove,setRowToRemove] = useState('')

  const columns = [
    { field: "picture", headerName: "Picture", width: 80,
      renderCell: (params) => {
        return (
            <img className='item-img' src={params.value} alt='' />
        );
      }
    },
    { field: 'name', headerName: 'Name', editable: true},
    { field: 'category', headerName: 'Category', editable: true},
    { field: 'price', headerName: 'Price',editable: true},
    { field: 'quantity', headerName: 'Quantity(Kg)', width: 120,editable: true,},
  ];

  const getItems = async () => {
    try {
      if(groceryItems.length>0){
        const each_item = groceryItems.split(",")
        for (let i=0; i < each_item.length; i++){
          const response = await fetch(`${constants.fetch_url}view_item?id=${each_item[i]}`,{
          headers: {
            'x-access-token': groceryToken,
          }
          });
          const data = await response.json()
          items.push(data)
        }
        setRows(items)
      }
    } catch (error) {
      console.error(error);
    }
  }

  const updateItem = async () => {
    try {
      var field = toUpdate.field
      var value = toUpdate.value
      if (field === "name"){
        const response = await fetch(`${constants.fetch_url}update_item?id=${toUpdate.id}`,{
          method: 'POST',
          headers: {
            'x-access-token': groceryToken,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name: value
          })
        })
        const data = await response.json();
        if(data.status === '200'){
          alert(data.message)
          setToUpdate(null)
        }
      } else if (field === "category"){
          if(value !== "Fruits" && value !== "Vegetables"){
            alert("Category can be (Fruits) or (Vegetables) only.")
            window.location.reload ();
          } else{
            const response = await fetch(`${constants.fetch_url}update_item?id=${toUpdate.id}`,{
              method: 'POST',
              headers: {
                'x-access-token': groceryToken,
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                category: value
              })
            })
            const data = await response.json();
            if(data.status === '200'){
              alert(data.message)
              setToUpdate(null)
            }
          }
      } else if (field === "price"){
          const response = await fetch(`${constants.fetch_url}update_item?id=${toUpdate.id}`,{
            method: 'POST',
            headers: {
              'x-access-token': groceryToken,
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              price: value
            })
        })
        const data = await response.json();
        if(data.status === '200'){
          alert(data.message)
          setToUpdate(null)
        }
      } else {
          const response = await fetch(`${constants.fetch_url}update_item?id=${toUpdate.id}`,{
            method: 'POST',
            headers: {
              'x-access-token': groceryToken,
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              quantity: value
            })
        })
        const data = await response.json();
        if(data.status === '200'){
          alert(data.message)
          setToUpdate(null)
        }
      }

    } catch (error) {
      alert("Something went wrong")
      console.error(error);
    }
  }

  // To store the selected item to be deleted
  const toRemove = async (row) => {
    setRowToRemove(row)
  }

  const removeItem = async () => {
    try{
      if(rowToRemove.length === 0) {
        alert("You must select the row you want to remove first.")
      } else{
        const response = await fetch(`${constants.fetch_url}remove_item?id=${rowToRemove}`, {
            method: 'POST',
            headers: {
                'x-access-token': groceryToken,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                grocery: groceryId
            })
        });
        const data = await response.json();
        alert(data.message)
        window.location.reload()
      }  

    } catch (error) {
      alert("Something went wrong. Please try again.")
      console.log(error)
    }
  }

  useEffect(() => {
    getItems()
  }, [groceryItems]);

  useEffect(() => {
    if(toUpdate !== null){
      updateItem()
    }
  }, [toUpdate]);

  return (
    <>
      {showBox?
      <>
        <div className="header">
          <div>
            <h1>My Stock</h1>
            <button className="add-btn" onClick={() => setShowBox(false)}> Add Item </button>  
            <button className="remove-btn" onClick={() => removeItem()}> Remove Item </button>  
          </div>
        </div>
        <div className="box">
          <Box sx={{ height: 400, width: '100%' }}>
            <DataGrid
              rows={rows}
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[5, 10, 15]}
              editMode='cell'
              rowSelection='single'   
              onSelectionModelChange={row => toRemove(row)}
              onCellEditCommit={(cell)=>setToUpdate(cell)}
              getRowId={(row)=>row._id}
            />
          </Box>
        </div> 
      </>

      :
      
      <AddItem/>}
    </>
  );
}
  
export default Stock;  