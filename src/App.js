
import React from 'react';
import MovieList from './components/MovieList';

const App = () => {
  return (
    <div className="App">
      <h1>Movie Database</h1>
      <MovieList />
    </div>
  );
};

export default App;



// Image URL format:
// The sample data you provided shows the image path as "images/shawshank.jpg". This looks like a relative path, which might not work directly in a React application fetching data from an API.
// API response:
// We need to make sure the actual API response includes full, valid URLs for the images.
// CORS issues:
// If the images are hosted on a different domain, there might be CORS (Cross-Origin Resource Sharing) issues preventing them from loading.
