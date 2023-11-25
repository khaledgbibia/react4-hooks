
import React, { useState } from 'react';
import './App.css';
import data from './data';
import Movieliste from './components/Movieliste';
import Addmovie from './components/Addmovie';
import SearchBar from './components/SearchBar';






function App() {
  const [movies,setMovies]=useState(data);
  const add =(newMovie)=>{
setMovies([...movies, newMovie])


  }
  const [search, setSearch]=useState("");
const [rating, setRating]=  useState(0);
  
  return (
    <div className="App">
      <br/>
      <Addmovie add={add}/>
     <br/>
     <SearchBar setSearch={setSearch} setRating={setRating}/>
    
        
      
     <br/>
     <Movieliste
          data={movies.filter(
            (el) =>
              el.title.trim().toLocaleLowerCase().includes(search) && el.rating >= rating
          )}
        />
    </div>
  );
}

export default App;
