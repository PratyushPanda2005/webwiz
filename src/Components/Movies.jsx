import  { useState, useEffect } from 'react';
import { motion } from "motion/react"

export default function Movies() {
  const [preMovies, setPreMovies] = useState({});

  useEffect(() => {
    fetch('https://api.jikan.moe/v4/top/anime?sfw') 
      .then(response => response.json()) 
      .then(data => {
        setPreMovies(data); 
      });
  }, []);  

  return (
    <div className='bg-black p-4'>
      <h1 className='text-3xl mb-4 text-center bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent font-poppins md:font-semibold'>
        Top Anime
      </h1>
      <div
        className='overflow-x-scroll border border-gray-300 rounded-lg p-4'
        style={{
          scrollbarWidth: 'thin',
          scrollbarColor: '#A0AEC0 #EDF2F7',
        }}
      >
        <ul className='flex flex-wrap justify-center gap-6'>
          {preMovies.data && preMovies.data.map((el, index) => (
            <motion.li whileHover={{scale:1.05}} key={index} className='flex flex-col items-center w-1/3 md:w-1/4 lg:w-1/4'>
              <h3 className='md:text-3xl font-poppins md:font-bold text-white'>{el.title}</h3>
              <img 
                className='md:w-96 h-32 w-72 md:h-96 rounded-md' 
                src={el.images.jpg.image_url} 
                alt={el.title} 
              />
             <a className='text-neutral-500 ' href={el.url}><span className='text-green-500 font-bold'>Click </span>Here</a>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
}
