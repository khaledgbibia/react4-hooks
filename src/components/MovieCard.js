
import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Rating from '@mui/material/Rating';
import { Link } from 'react-router-dom';
import { colors } from '@mui/material';

export const MovieCard = ({movieInfo}) => {
  return (
    <div >
        
   <center>   
<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={movieInfo.postUrl}/>
      <Card.Body>
        <Card.Title>{movieInfo.title}</Card.Title>
        <Card.Text>
       
        {movieInfo.description}
        
        </Card.Text>

      </Card.Body>
     <center>
      <Rating name="read-only"  readOnly max ={10} value= {movieInfo.rating}/>
      </center>
      
      <Button variant="warning" >
      <Link style={{textDecoration: "none", color:"rebeccapurple"}} to={`/details/${movieInfo.id}`}>More Details</Link>

        </Button>
    </Card>



    
    </center> 
    </div>

  )
 
}
export default MovieCard;
