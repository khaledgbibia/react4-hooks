import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Rating from '@mui/material/Rating';
import { findByLabelText } from '@testing-library/react';


export const Addmovie = ({add   }) => {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [newMovie,setNewMovie]=useState({
    title:"",
    description:"",
    postUrl:"",
    rating:0,

  });
  const change=(e)=>{
    setNewMovie({...newMovie, [e.target.name]:e.target.value})
  }
  const saveFilm=()=>{
    add(newMovie);
    handleClose();
  }
  return (
    <div>

         
      <Button variant="warning" onClick={handleShow}>
        Add Movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>New Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Title</Form.Label>
        <Form.Control 
        type="text"
        name="title" 
        placeholder="Enter Title" 
        onChange={change}
        />
        
        <Form.Text className="text-muted">
          We should be enter film title.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Description</Form.Label>
        <Form.Control
        type="text"
         name="description"
          placeholder="Description..."
          onChange={change} />
      </Form.Group>
      <Form.Group className="mb-4" controlId="formBasicPasswor">
        <Form.Label>Image</Form.Label>
        <Form.Control
         name="postUrl" 
         placeholder="Url image..."
         onChange={change}
         />
      </Form.Group>
     <center>
      <Rating
      
  name="simple-controlled"
  max={10}
  value={null}
//   value={value}
  onChange={(event, newValue) => {
    setNewMovie({...newMovie,rating:newValue})

  }}
/>
</center>
      
     
    </Form>
            
            </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={saveFilm}>
            Save Movie
          </Button>
        </Modal.Footer>
      </Modal>
    
     
    </div>
    
  )
}
export default Addmovie;