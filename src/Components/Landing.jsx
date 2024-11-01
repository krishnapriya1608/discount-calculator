import { Card, CardActionArea, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom'; 
function Landing() {
  const navigate = useNavigate(); // Hook to navigate

  const handleButtonClick = () => {
    navigate('/load'); // Navigate to Loadpage on button click
  };

  return (
    <div>
      <Card sx={{ width: "930px", height: "640px", marginTop: "15px", marginLeft: "150px" }}>
        <CardActionArea>
          <CardMedia
          className='w-100'
            component="img"
            height="500"
            image="https://items.epicpxls.com/uploads/photo/78ac5b533b03c2dbf463232848463be2.gif"
            alt="graphic"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" style={{marginLeft:"350px",color:"blueviolet",fontWeight:"bolder"}}>
             Discount Calculator
            </Typography>
            <Button variant="contained" sx={{ marginLeft: "400px" ,marginBottom:"60px",}} onClick={handleButtonClick}>
              Go There 
              <img style={{ width: "30px", height: "30px", marginLeft: "10px" }} 
                   src="https://www.svgrepo.com/show/408495/arrow-02.svg" 
                   alt="arrow" />
            </Button>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            www.discountcalculator
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default Landing;
