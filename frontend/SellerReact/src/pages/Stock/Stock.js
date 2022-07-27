import { useState, useEffect } from "react";
import constants from "../../constants";
import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';

const Stock = () => {

  const groceryItems = localStorage.getItem('items')
  const groceryToken = localStorage.getItem('token')
  const items = []
  const each_item = groceryItems.split(",")

  const [rows,setRows] = useState([])

  const columns = [
    { field: 'name', headerName: 'Item Name' },
    { field: 'category', headerName: 'Category'},
    { field: 'price', headerName: 'Price' },
    { field: 'quantity', headerName: 'Quantity(Kg)', width: 120},
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

  useEffect(() => {
    getItems()
  }, [groceryItems]);

  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5, 10, 15]}
        checkboxSelection
        disableSelectionOnClick
        getRowId={(row)=>row._id}
      />
    </Box>
  );
}
  
export default Stock;  