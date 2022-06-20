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

function Books() {
  const [info, setInfo] = useState()

  const fetchData = () => {
    api.get(URL + '/book')
      .then((res) => {
        setInfo(res.data)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  if (!info) return null

  return (
    <div className='container lg:px-6 xl:px-10'>
      <div className='pb-8'>
        High-fantasy trilogy novel written by J. R. R. Tolkien composed of {info.total} books:
      </div>
      <ol className='list-decimal px-10'>
        {info.docs.map((book) => (
          <li className='text-color text-xl' key={book._id}>{book.name}</li>
        ))}
      </ol>
    </div>
  )
}

export default Books