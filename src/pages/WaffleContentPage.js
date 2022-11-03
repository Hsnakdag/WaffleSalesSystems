import * as React from 'react'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Grid } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import SaveIcon from '@mui/icons-material/Save';
import Products from '../components/Products';
import productArr from '../components/NewProduct'
const options = ['Strawberry', 'Kiwi', 'Banana', "White Chocolate"];


const WaffleContentPage = (props) =>{
  const [value, setValue] = React.useState(options[0]);
  const [inputValue, setInputValue] = React.useState('');
 console.log("hasannnnn" ,props.productArr)
     //Axios
  /*const getProducts = async (e) => {
    const headers = {
      'Content-Type': 'text/plain'
    };
    e.preventDefault();
    try {
      const data = await axios({
        method: 'get',
        url: 'http://localhost:54999/api/WafflesSallesSystem/GetAllProducts',

      })
      .then(({data}) => data);
     this.setTemporary({data})
      console.log(data);
    } catch (err) {
      if (err.response.status === 404) {
        console.log('Resource could not be found!');
      } else {
        console.log(err.message);
      }
    }
  }
    */

 
 
 
 
    return (
    <div>
    
   <Products productArr={props.productArr}/>
   
    <Grid container spacing={12} direction="row" justifyContent="center" alignItems="center">
                <Grid item xs={4}>
                    <Autocomplete
                        value={value}
                        onChange={(event, newValue) => {
                            setValue(newValue);
                        }}
                        inputValue={inputValue}
                        onInputChange={(event, newInputValue) => {
                            setInputValue(newInputValue);
                        }}
                        id="controllable-states-demo"
                        options={options}

                        renderInput={(params) => <TextField {...params} label="Which Product" />}
                    />
                </Grid>
               
                <Grid item xs={4}>
                    <TextField type="number" id="productQuantity" label="Enter Quantity" variant="outlined" />
                </Grid>
                <Grid container direction="column"  justifyContent="space-between"
  alignItems="center">
                <Stack direction="row" spacing={12}>
                   
                    <IconButton  color="secondary" aria-label="Save Button">
                        <SaveIcon />
                    </IconButton>
                   
                </Stack>
                </Grid>
            </Grid>
     
 </div>
  )
}

export default WaffleContentPage;