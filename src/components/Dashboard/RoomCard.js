import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Link from '@mui/material/Link';

import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard() {
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
          <Typography gutterBottom variant="h5" component="div">
            X Number
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Available Rooms
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
