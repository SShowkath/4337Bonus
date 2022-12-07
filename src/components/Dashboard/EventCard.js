import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard() {


  return (
    <Card sx={{ maxWidth: 275, height:450 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image = "https://static.vecteezy.com/system/resources/thumbnails/006/692/012/small/calendar-date-date-notes-business-office-event-icon-template-black-color-editable-calendar-date-symbol-flat-illustration-for-graphic-and-web-design-free-vector.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" fontWeight="bold">
            0
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Events today
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Button size="small" variant="contained" color="success">
        <Link href="./EventPage" underline="hover" color="white" >Events</Link>
        </Button>
      </CardActions>
    </Card>
  );
}
