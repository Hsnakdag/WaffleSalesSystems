import * as React from 'react'
import Box from '@mui/material/Box';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Checkbox from '@mui/material/Checkbox';



const Products = (props)=>{

   // const context = useContext(WaffleContext);


    

   console.log("products :" , props.productArr);
    

const [temporary,setTemporary] = React.useState([]);

  
  
  
    const [state, setState] = React.useState({
    gilad: true,
    jason: false,
    antoine: false,
  });
 
  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
     
  };
  const { gilad, jason, antoine } = state;



    return (


<div className='background'>
  
    
<Box sx={{ display: 'flex' }}>
      <FormControl sx={{ m: 2 }} component="fieldset" variant="standard">
        <FormLabel component="legend">Chocolates</FormLabel>
        <FormGroup>


      
          <FormControlLabel
            control={
              <Checkbox checked={gilad} onChange={handleChange} name="gilad" />
            }
            label="White Chocolate 20$"
          />
      
          <FormControlLabel
            control={
              <Checkbox checked={jason} onChange={handleChange} name="jason" />
            }
            label="Dark Chocolate 12$"
          />
          <FormControlLabel
            control={
              <Checkbox checked={antoine} onChange={handleChange} name="antoine" />
            }
            label="Chocolate Milk 5$"
          />
        </FormGroup>
        <FormHelperText>Choose </FormHelperText>
      </FormControl>
     
    </Box>


</div>


    )
}
export default Products;