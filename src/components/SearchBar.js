import React from 'react'

export const SearchBar = () => {
  return (
    <div>

<form>
        <input
          type="text"
          placeholder="Rechercher un film..."

        />
        <button type="submit">Rechercher</button>
      </form>
    </div>
  )
}

  
  export default SearchBar;
