import React, { useEffect } from 'react';
import '../server/public/styles.css';

const API_URL = 'http://www.omdbapi.com?apikey=a0584c07';

const App = () => {

  const searchMovies = async title => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    console.log(data.Search);
  };

  useEffect(() => {
    searchMovies('Spiderman');
  }, []);

  return (
    <h1> hello there how is it going</h1>
  );
};

export default App;
