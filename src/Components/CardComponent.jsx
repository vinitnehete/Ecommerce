import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./card.css"
export default function CardComponent(props) {

  const truncateTitle = (title, limit) => {
    if (title.length <= limit) {
      return title;
    }
    return title.slice(0, limit).trim() + "...";
  };
  
  

  return (
    <div className='section'>
    <Card className='card' sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 180 }}
        image={props.image}
        title={props.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {truncateTitle(props.title , 20 )}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         ${props.price}
        </Typography>
      </CardContent>
      <CardActions>
       
        <Button size="small">Buy Now</Button>
      </CardActions>
    </Card>
    </div>
  );
}
