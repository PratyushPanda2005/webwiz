import React, { useState, useEffect } from 'react';

function App() {
  // Step 1: Set up state to store the posts data
  const [movieMania, setMovieMania] = useState([]);  // To store the fetched posts
  const [preMovies, setPreMovies] = useState({});  // To store the fetched posts

  // Step 2: Fetch data from the API when the component first loads
  useEffect(() => {
    fetch('https://whoa.onrender.com/whoas/ordered/3-7')  // API URL
      .then(response => response.json())  // Convert the response to JSON
      .then(data => {
        setMovieMania(data);  // Save the fetched posts in state
      });
  }, []);  // Empty array means it runs only once when the component mounts
  

  // Step 3: Render the posts
  return (
    <div className='p-4 bg-black h-screen pt-32'>
      <h1 className='text-7xl mb-4 text-white text-center font-poppins'>Movie Section</h1>
      <h1 className='text-3xl mb-4 text-center bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent font-poppins md:font-semibold'>Trending Now</h1>

      <div
        className='overflow-x-scroll whitespace-nowrap border border-gray-300 rounded-lg p-4'
        style={{
          scrollbarWidth: 'thin',
          scrollbarColor: '#A0AEC0 #EDF2F7',
        }}
      >
        <ul className='flex space-x-6'>
          {movieMania.map((el, index) => (
            <li key={index} className='inline-block text-center'>
              <h3 className='text-3xl font-poppins font-bold text-white'>{el.movie}</h3>
              <p className='text-gray-500'>{el.character}</p>
              <img className='md:w-96 h-72 w-72 md:h-96 rounded-md' src={el.poster} alt={el.movie} />
            </li>
          ))}
        </ul>
      </div>

    
    </div>
  );
}

export default App;
