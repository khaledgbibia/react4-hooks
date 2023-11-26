import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link, useParams } from 'react-router-dom';
import data from '../data';



 const Details = () => {
    let {id} = useParams();
    let specificMovie = data.filter((el)=> el.id === id);
  return (
    <div style={{
        background:"rebeccapurple" 
    }}>
        {specificMovie.map((el)=><Card style={{ width: "900px" , margin:"auto" }}>
            <div style={{
     
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: "20px",
      marginTop:"50px",
      background:"yellow"
    }}>
      <Card.Img variant="top" src={el.postUrl} style={{height:"300px", width:"200px"}} />
      <iframe src={el.trailer} style={{height:"300px", width:"600px"}}></iframe>
      </div>
      <Card.Body>
        <Card.Title>{el.title}</Card.Title>
        <Card.Text>
          {el.description}
        </Card.Text>
        <Button variant="warning">
           <Link style={{textDecoration: "none", color:"rebeccapurple"}} to={`/`}> Back Home</Link> 
            </Button>
      </Card.Body>
    </Card>)}


    </div>
  )
}
export default Details ;