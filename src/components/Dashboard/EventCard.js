import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 275, height:350 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image = "https://static.vecteezy.com/system/resources/thumbnails/006/692/012/small/calendar-date-date-notes-business-office-event-icon-template-black-color-editable-calendar-date-symbol-flat-illustration-for-graphic-and-web-design-free-vector.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            X Number
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Events today
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
