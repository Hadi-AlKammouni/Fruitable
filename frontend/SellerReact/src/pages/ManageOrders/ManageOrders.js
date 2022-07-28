import { useState, useEffect } from "react";
import constants from "../../constants";
import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
const ManageOrders = () => {

  const grocery_orders = localStorage.getItem('orders')
  const grocery_token = localStorage.getItem('token')
  const orders = []
  const each_order = grocery_orders.split(",")
  const [rows,setRows] = useState([])

  const columns = [
    { field: 'username', headerName: 'Order From', width: 100 }
  ];

  const getOrders = async () => {
    try {
      for (let i=0; i < each_order.length; i++){

        const response =  await fetch(`${constants.fetch_url}manage_order?id=${each_order[i]}`,{
        headers: {
          'x-access-token': grocery_token,
        }
        });
        const data = await response.json()
        orders.push(data)
      }
      setRows(orders)
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getOrders()
  }, [grocery_orders]);

    return (
      <Box sx={{ height: 400, width: '50%' }}>
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
  
export default ManageOrders;  