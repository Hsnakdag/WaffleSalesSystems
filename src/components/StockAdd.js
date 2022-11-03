/*import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Grid } from '@mui/material';


import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import SaveIcon from '@mui/icons-material/Save';


const options = ['Strawberry', 'Kiwi', 'Banana', "White Chocolate"];


function StockAdd() {
    const [value, setValue] = React.useState(options[0]);
    const [inputValue, setInputValue] = React.useState('');
     


    return (



        <div className='background'>
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
                    <TextField type="number" id="productPrice" label="Enter Price $" variant="outlined"/>
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

export default StockAdd; */