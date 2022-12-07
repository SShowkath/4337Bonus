import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Link from '@mui/material/Link';

import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard() {

  const [rooms, setRooms] = useState([]);    

  useEffect(() => {
      fetch('http://localhost/devtest/react/department.php')
          .then((response) => response.json())
          .then((json)=> setRooms(json))

  }, []);

  let count = 0;
  console.log(rooms);
  for (let i = 0; i < rooms.length; i++)
  {
    if (rooms[i].RoomsAvailable != null)
      count += parseInt(rooms[i].RoomsAvailable);
  }

  return (
    <Card sx={{ maxWidth: 275 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image = "https://www.creativefabrica.com/wp-content/uploads/2018/11/Door-icon-by-rudezstudio-580x386.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" fontWeight="bold">
            {count}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Available Emergency Rooms
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" variant="contained" color="success">
        <Link href="./Rooms" underline="hover" color="white" >Rooms</Link>

        </Button>
      </CardActions>
    </Card>
  );
}
