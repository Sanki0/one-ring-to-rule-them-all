import React from 'react'
import books from '../resources/books.jpg'
import movies from '../resources/movies.jpg'
import characters from '../resources/gandalf.jpg'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className=''>
      <div className='grid grid-cols-2 gap-8 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2'>
        <Link to='/books'>
          <div className='grid grid-col-2 gap-2'>
            <h2 className='flex justify-center'>Books</h2>
            <div className='flex justify-center'>
              <img src={books} alt="books" className='object-cover h-52 xl:h-72 lg:h-72 md:h-60' />
            </div>
          </div>
        </Link>
        <Link to='/movies'>
          <div className='grid grid-col-2 gap-2'>
            <h2 className='flex justify-center'>Movies</h2>
            <div className='flex justify-center'>
              <img src={movies} alt="movies" className='object-cover h-52 xl:h-72 lg:h-72 md:h-60' />
            </div>
          </div>
        </Link>
        <Link to ='/characters'>
          <div className='grid grid-col-2 gap-2'>
            <h2 className='flex justify-center'>Characters</h2>
            <div className='flex justify-center'>
              <img src={characters} alt="characters" className='object-cover h-52 xl:h-72 lg:h-72 md:h-60' />
            </div>
          </div>
        </Link>
        <div className=''>
          <h2>Random Quote</h2>
        </div>
      </div>
    </div>

  )
}

export default Home