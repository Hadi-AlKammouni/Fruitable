import { useState, useEffect } from "react";
import constants from "../../constants";
import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import './styles.css'
const Stock = () => {

  const groceryItems = localStorage.getItem('items')
  const groceryToken = localStorage.getItem('token')
  const items = []
  const each_item = groceryItems.split(",")

  const [rows,setRows] = useState([])
  const [toUpdate,setToUpdate] = useState(null)

  const columns = [
    { field: 'name', headerName: 'Item Name', editable: true},
    { field: 'category', headerName: 'Category', editable: true},
    { field: 'price', headerName: 'Price',editable: true},
    { field: 'quantity', headerName: 'Quantity(Kg)', width: 120,editable: true,},
  ];

  const getItems = async () => {
    try {
      for (let i=0; i < each_item.length; i++){
        const response =  await fetch(`${constants.fetch_url}view_item?id=${each_item[i]}`,{
        headers: {
          'x-access-token': groceryToken,
        }
        });
        const data = await response.json()
        items.push(data)
      }
      setRows(items)
    } catch (error) {
      console.error(error);
    }
  }

  const updateItem = async () => {
    try {
      console.log(toUpdate)
      let field = toUpdate.field
      const value = toUpdate.value
      if (field === "name"){
      const response = await fetch(`${constants.fetch_url}update_item?id=${toUpdate.id}`,{
        method: 'POST',
        headers: {
          'x-access-token': groceryToken,
        },
        body: JSON.stringify({
          name: value
        })
      })
      const data = await response.json();
      // alert(data.message)
    }
      else if (field === "category"){
        const response = await fetch(`${constants.fetch_url}update_item?id=${toUpdate.id}`,{
          method: 'POST',
          headers: {
            'x-access-token': groceryToken,
          },
          body: JSON.stringify({
            category: value
          })
      })
      const data = await response.json();
      // alert(data.message)
    }
      else if (field === "price"){
        const response = await fetch(`${constants.fetch_url}update_item?id=${toUpdate.id}`,{
          method: 'POST',
          headers: {
            'x-access-token': groceryToken,
          },
          body: JSON.stringify({
            price: value
          })
      })
      const data = await response.json();
      // alert(data.message)
    }
      else {
        const response = await fetch(`${constants.fetch_url}update_item?id=${toUpdate.id}`,{
          method: 'POST',
          headers: {
            'x-access-token': groceryToken,
          },
          body: JSON.stringify({
            quantity: value
          })
      })
      const data = await response.json();
      // alert(data.message)
    }
    } catch (error) {
      alert("Something went wrong")
      console.error(error);
    }
  }

  useEffect(() => {
    getItems()
  }, [groceryItems,toUpdate]);

  useEffect(() => {
    if(toUpdate !== null){
      updateItem()
    }
  }, [toUpdate]);

  return (
    <>
      <div className="header">
        <div>
          <h1>My Stock</h1>
          <button className="add-btn">Add Item</button>
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
            disableSelectionOnClick
            onCellClick={(e)=>console.log(e)}
            onCellEditCommit={(cell)=>setToUpdate(cell)}
            getRowId={(row)=>row._id}
          />
        </Box>
      </div> 
    </>
  );
}
  
export default Stock;  