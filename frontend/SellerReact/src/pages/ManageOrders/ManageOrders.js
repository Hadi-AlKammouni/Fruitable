import React, { useState, useEffect } from "react";
import constants from "../../constants";
import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import './styles.css';
import {toast} from 'react-toastify';

const ManageOrders = () => {

  const grocery_orders = localStorage.getItem('orders')
  const grocery_token = localStorage.getItem('token')
  const orders = []
  const each_order = grocery_orders.split(",")
  const [rows,setRows] = useState([])
  const [orderRows,setOrderRows] = useState([])
  const [showSpecificOrder, setShowSpecificOrder] = useState(false)

  const columns = [
    { field: 'username', headerName: 'Order From', width: 100 }
  ];

  const order_columns = [
    { field: "picture", headerName: "Picture", width: 80,
      renderCell: (params) => {
        return (
            <img className='item-img' src={params.value} alt='' />
        );
      }
    },
    { field: 'name', headerName: 'Item', width: 100 },
    { field: 'price', headerName: 'Price', width: 100 }
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
      toast.info('Click on an order to view its details.',{position: toast.POSITION.TOP_CENTER}, {autoClose:2000})

    } catch (error) {
      toast.error('Something went wrong.',{position: toast.POSITION.TOP_CENTER}, {autoClose:2000})
      console.error(error);
    }
  }

  const displayOrder = async (data) => {
    setOrderRows(data.row.items)
    setShowSpecificOrder(true)
  }

  useEffect(() => {
    getOrders()
  }, [grocery_orders]);

    return (
      <>
      <h1>Orders</h1>
      {!showSpecificOrder ? 
        null 
      :
        <button className="add-btn" onClick={() => setShowSpecificOrder(false)}> Back to Orders </button>  
      }
      <div style={{'background-color': 'var(--glass)', 'width': '80%'}}>
        {!showSpecificOrder ?
          <Box sx={{ height: 400, width: '100%' }}>
            <DataGrid
              rows={rows}
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[5, 10, 15]}
              disableSelectionOnClick
              onCellClick={(data)=>displayOrder(data)}
              getRowId={(row)=>row._id}
            />
          </Box>
        :
          <Box sx={{ height: 400, width: '100%' }}>
            <DataGrid
              rows={orderRows}
              columns={order_columns}
              pageSize={5}
              rowsPerPageOptions={[5, 10, 15]}
              disableSelectionOnClick
              getRowId={(row)=>row._id}
            />
          </Box>
        }
      </div>
      </>
    );
}
  
export default ManageOrders;  