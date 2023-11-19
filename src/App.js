
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
  return (
    <div className="App">
      <br/>
      <Addmovie add={add}/>
     <br/>
     <SearchBar/>
     <br/>
     <Movieliste data={movies }/>
    </div>
  );
}

export default App;
