
import { useState } from 'react';
import './App.css';
import moviesData from './moviesData';
import MovieList from './Componants/MovieList';
import AddMovie from './Componants/AddMovie';
import Filter from './Componants/Filter';

function App() {

  const [movies, setMovies] = useState(moviesData);
  const [searchTitle, setSearchTitle] = useState("")
  const [searchRating, setSearchRating] = useState(0)

  const addMovie = (neww) => {
    setMovies([...movies, neww])
  }

  return (
    <div className="App">
      <Filter setSearchTitle={setSearchTitle} setSearchRating={setSearchRating}/>
      <MovieList movies={movies} searchTitle={searchTitle} searchRating={searchRating} />
      <AddMovie addMovie={addMovie} />
    </div>
  );
}

export default App;