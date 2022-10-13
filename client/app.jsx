import React, { useState, useEffect } from 'react';
import '../server/public/styles.css';
import Card from './card';

const API_URL = 'http://www.omdbapi.com?apikey=a0584c07';

const movie1 = {
  Title: 'Spiderman',
  Year: '2010',
  imdbID: 'tt1785572',
  Type: 'movie',
  Poster: 'N/A'
};

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const searchMovies = async title => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies('Spiderman');
  }, []);

  return (
    <div className='app'>
      <h1>Movies</h1>
      <div className='search'>
        <input
          placeholder="Search here..."
          value={searchTerm}
          onChange={event => setSearchTerm(event.target.value)}
        />
        <button className='search-button' onClick={() => searchMovies(searchTerm)}> Search </button>
      </div>

      {movies?.length > 0
        ? (
          <div className='container'>
            {movies.map(movie => (
              <Card movie={movie} key={movie}/>
            ))}
          </div>
          )
        : (
          <div className='empty'>
            <h2>No movies found</h2>
          </div>
          )}
    </div>
  );
};

export default App;
