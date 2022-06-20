import axios from 'axios'
import { useEffect, useState } from 'react';


const URL = process.env.REACT_APP_API_URL
const TOKEN = process.env.REACT_APP_API_TOKEN

const api = axios.create({
  baseURL: URL,
  headers: {
    Authorization: `Bearer ${TOKEN}`,
  },
})


function Movies() {
  const [info, setInfo] = useState()

  const fetchData = () => {
    api.get(URL + '/movie')
      .then((res) => {
        setInfo(res.data)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  if (!info) return null

  const isInt = (x) => {
    return x % 1 === 0
  }
  const Duration = (x) => {
    var hours = x / 60
    var min = x % 60
    return `Duration: ${hours | 0}hrs ${min}min`
  }

  return (
    <div>
      <div className='grid grid-cols-2 gap-8 md:grid-cols-4'>
        {info.docs.map((movie) => (
          <div className='flex flex-col items-center' key={movie._id}>
            <h1 className='text-2xl text-center pb-2'>{movie.name}</h1>
            <div>{Duration(movie.runtimeInMinutes)}</div>
            <div>
              <div>Budget: {movie.budgetInMillions} million USD</div>
              <div>Revenue: {movie.boxOfficeRevenueInMillions} million USD</div>
            </div>
            <div>Critics say it was a {isInt(movie.rottenTomatoesScore) ? movie.rottenTomatoesScore : movie.rottenTomatoesScore.toFixed(2)}/100</div>
          </div>
        ))}
      </div>


    </div>
  )
}

export default Movies