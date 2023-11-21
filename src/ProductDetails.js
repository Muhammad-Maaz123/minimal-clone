import React from 'react'
import { Grid, Box, Paper, Typography } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import { Radio, RadioGroup, FormControlLabel, Select, MenuItem, Menu } from '@mui/material';
import Divider from '@mui/material/Divider';
function ProductDetails() {
//rating stars
const stars = [];

// Using a loop to add the StarIcon four times
for (let i = 0; i < 4; i++) {
  stars.push(<Typography key={i}><StarIcon sx={{ color: '#FAAF00' }} /></Typography>);
}
//radio button
const [selectedColor, setSelectedColor] = React.useState('blue');

  const handleChange = (event) => {
    setSelectedColor(event.target.value);
  };
  //size dropdown


  const [selectedSize, setSelectedSize] = React.useState('');
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSize = (event) => {
    setSelectedSize(event.target.value);
    handleClose();
  };
  return (
    <>
        <Grid container spacing={2} mt={6}>
                {/* Left Grid Item */}
                <Grid item xs={12} md={6}>
                <Paper>
                    {/* Display your image here */}
                    <img src="product_1.jpg" alt="Image" style={{ width: '100%', height: '100%' }} />
                </Paper>
                </Grid>

                {/* Product Description */}
                <Grid item xs={12} md={6}>
                <Box  width={'30rem'} sx={{backgroundColor:'red'}}>
                    <Typography>New</Typography>
                    <Typography>In Stock</Typography>
                    <Typography>Foundations Matte Flip Flop</Typography>
                    <Typography sx={{display:'flex', justifyContent:'row'}}><>{stars}</><StarIcon sx={{color:'#CAD1D7'}}/> (9.12k reviews)</Typography>
                    <Typography>$97.14</Typography>
                    <Typography>Featuring the original ripple design inspired by
                         Japanese bullet trains, the Nike Air Max 97 lets you push
                          your style full-speed ahead.
                    </Typography>

                </Box>
                <Divider/>
                <Box width={'30rem'} display="flex" alignItems="center" justifyContent="space-between" sx={{backgroundColor:'green'}}>
                {/* Color Tag on the left */}
                <Typography>Color</Typography>

                {/* Radio Buttons on the right */}
                <RadioGroup
                    name="color"
                    value={selectedColor}
                    onChange={handleChange}
                    row
                >
                    <FormControlLabel
                    value="blue"
                    control={<Radio color="primary" />}
                    />
                    <FormControlLabel
                    value="yellow"
                    control={<Radio color="warning" />}
                    />
                </RadioGroup>
                </Box>
                <Box display="flex" alignItems="center">
      {/* Label Box */}
      <Box marginRight={1}>
        <Typography>Size</Typography>
      </Box>

      {/* Scrollable Dropdown Box */}
      <Box>
        <Typography onClick={handleOpen} style={{ cursor: 'pointer' }}>
          {selectedSize || 'Select Size'}
        </Typography>

        {/* Menu with Scrolling */}
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
          MenuListProps={{ style: { maxHeight: 200, overflowY: 'auto' } }}
        >
          {[...Array(10).keys()].map((number) => (
            <MenuItem key={number + 1} onClick={() => handleSize(number + 1)}>
              {number + 1}
            </MenuItem>
          ))}
        </Menu>
      </Box>
    </Box>
                </Grid>
            </Grid>
    </>
  )
}

export default ProductDetails