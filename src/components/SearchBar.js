import React from 'react'
 
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Rating from '@mui/material/Rating';




const SearchBar = ({setSearch,setRating}) => {


   
      return (
        <div>
          <Rating
  name="simple-controlled"
  max={10}
  onChange={(event, newValue) => {
    setRating(newValue)
  }}
/>
<Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={(e)=>{setSearch(e.target.value)}}
            />
 
            <Button variant="outline-success">Search</Button>
          </Form>
         
            
            
          
          
        </div>
      );
    };
export default SearchBar;

