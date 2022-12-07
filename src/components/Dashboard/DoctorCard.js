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
  const [Docs, setDocs] = useState([]);    

    useEffect(() => {
        fetch('http://localhost/devtest/react/employee.php')
            .then((response) => response.json())
            .then((json) => setDocs(json))

    }, []);


  return (
    <Card sx={{ maxWidth: 275 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image = "https://www.creativefabrica.com/wp-content/uploads/2019/04/Doctor-icon-by-hellopixelzstudio.png"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" fontWeight="bold">
            {Docs.length}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Available Doctors
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Button size="small" variant="contained" color="success">
        <Link href="./StaffPage" underline="hover" color="white" >Staff</Link>
        </Button>
      </CardActions>
    </Card>
  );
}
