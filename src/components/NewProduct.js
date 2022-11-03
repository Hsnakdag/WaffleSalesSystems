import React from 'react'
import { useState }  from 'react';
import TextField from '@mui/material/TextField';
import { Grid } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import SaveIcon from '@mui/icons-material/Save';
import axios from 'axios';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import { Link } from 'react-router-dom';

const  NewProduct=()=> {


  const [productName, setProductName] = useState(" ");
  //const [productNameData, setProductNameData] = useState([]);
  const [productPrice, setProductPrice] = useState(1);
  const [productQuantity, setProductQuantity] = useState(1);
 // const [productArr,setProductArr] = useState([]);
 var productArr;
 
 
const productId = Math.floor(Math.random()* 10000);
 const inputTextHandler = async (e) => {
    e.preventDefault();
    const productId = Math.floor(Math.random()* 10000);
    try {
      const data = await axios.post("http://localhost:54999/api/WafflesSallesSystem/CreateStockById",{
        "id": productId,
        "stockName": productName,
        "stockPrice": productPrice,
        "stockQuantity": productQuantity
        })
      
      console.log(data);
    } catch (err) {
      if (err.response.status === 404) {
        console.log('Resource could not be found!');
      } else {
        console.log(err.message);
      }
    }
};
  

  /*  const addNewProducts = (e) =>{
      
      e.preventDefault();
      
      setProductNameData([...productNameData, {id: Math.random(), stockName: productName, stockPrice: 1, stockQuantity: 1}]);
      console.log(productNameData);
   
     
         setProductName(" ");
    }
*/





const getProducts = async (e) => {
 
    const headers = {
      'Content-Type': 'text/plain'
    };
   e.preventDefault();
    
      const response = await axios({
        method: 'get',
        url: 'http://localhost:54999/api/WafflesSallesSystem/GetAllProducts'
        
      }).then(function(response){
        console.log("funni", response.data);
       
        productArr = response.data ;
            




        /*response.data.forEach((element) => {
          productArr.push(element.stockName);
       
        });*/
});

    console.log("last",productArr);
    }


  return (
    <div>
      
      <form onSubmit={inputTextHandler}>
        <label>New Stock Product Saving Screen </label>
        <Grid item xs={4}>

          <TextField
           onChange={(e) => setProductName(e.target.value)} type="text" name="name" label="Enter New Product" variant="outlined" />
          <TextField onChange={(e) => setProductPrice(e.target.value)} type="text" name="name" label="Enter Price" variant="outlined" />
          <TextField onChange={(e) => setProductQuantity(e.target.value)} type="text" name="name" label="Enter Quantity" variant="outlined" />
         
        </Grid>
      
        <IconButton type='onSubmit' color="primary" aria-label="Save Button"><SaveIcon /></IconButton>
        <IconButton type='onClick' onClick={getProducts} color="primary" aria-label="Skip Button" ><Link to="/waffleContentPage"><SkipNextIcon/></Link> </IconButton>
        
     
         
   

      </form>

                
    </div>
  )

  }
export default NewProduct;