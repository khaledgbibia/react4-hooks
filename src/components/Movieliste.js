import React from 'react'
import MovieCard from './MovieCard';
import { eventWrapper } from '@testing-library/user-event/dist/utils';

export const Movieliste = ({data}) => {
  return (
    <div style={{
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: "200px",
    }}>
  
 
  {data.map((el)=><MovieCard movieInfo={el}/>)}
 
        
    </div>
  )
}
export default Movieliste;
