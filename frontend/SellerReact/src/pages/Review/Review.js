import React, {useEffect, useState} from "react";
import constants from "../../constants";
import {useGrocery} from '../../context/grocery';
import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';

const Review = () => {

  const token = localStorage.getItem('token')
  const grocery_id = localStorage.getItem('_id')
  const [data,setData] = useState([])
  const [rows,setRows] = useState([])

  const {
    setGroceryName, 
    setGroceryPhoneNumber, 
    setGroceryDescription, 
    setGroceryLatitude, 
    setGroceryLongitude, 
    setGroceryPicture, 
    setGroceryCategories,
    setGroceryItems, 
    setGroceryOrder,
    setGroceryReviews
  } = useGrocery()

  const columns = [
    { field: 'first_name', headerName: 'Name' },
    { field: 'rate', headerName: 'Rate' },
    { field: 'text', headerName: 'Review', width: 600},
  ];

  const veiwGrocery = async () => {
    try {
      const response = await fetch(`${constants.fetch_url}view_grocery?id=${grocery_id}`,{
        headers: {
          'x-access-token': token,
        }
      });
      const data = await response.json();
      if(data._id){
        setData(data)
        localStorage.setItem('name',data.name)
        localStorage.setItem('phone_number',data.phone_number)
        localStorage.setItem('description',data.description)
        localStorage.setItem('latitude',data.latitude)
        localStorage.setItem('longitude',data.longitude)
        localStorage.setItem('picture',data.picture)
        localStorage.setItem('categories',data.categories)
        localStorage.setItem('items',data.items)
        localStorage.setItem('orders',data.orders)
        localStorage.setItem('reviews',data.reviews)
        setGroceryName(data.name) 
        setGroceryPhoneNumber(data.phone_number) 
        setGroceryDescription(data.description) 
        setGroceryLatitude(data.latitude) 
        setGroceryLongitude(data.longitude) 
        setGroceryPicture(data.picture) 
        setGroceryCategories(data.categories)
        setGroceryItems(data.items) 
        setGroceryOrder(data.orders)
        setGroceryReviews(data.reviews)
      }
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    veiwGrocery()
  }, []);

  useEffect(()=>{
      setRows(data.reviews ?? [])
  }, [data])

  return (
    <>
      <h1>Users Reviews</h1>
      <div style={{'background-color': 'var(--glass)', 'width': '80%'}}>
      <Box sx={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5, 10, 15]}
          disableSelectionOnClick
          getRowId={(row)=>row._id}
        />
      </Box>
      </div>
    </>
  );
}
  
export default Review;  