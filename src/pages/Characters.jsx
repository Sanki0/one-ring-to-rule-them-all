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

function Characters() {
  const [info, setInfo] = useState([])
  const [showMore, setShowMore] = useState(false)
  const [text, setText] = useState('')

  const fetchData = () => {
    api.get(URL + '/character?sort=name:asc')
      .then((res) => {
        setInfo(res.data.docs)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  if (!info) return null

  const handleClick = () => {
    setShowMore(!showMore)
  }

  const handleChange = (e) => setText(e.target.value)

  const numberOfItems = showMore ? info.length : 30

  const handleSubmit = (e) => {
    e.preventDefault()



    if (text === '') {
      console.log('Please enter something')
    } else {
      api.get(URL + `/character?name=/${text}/i`)
        .then((res) => {
          setInfo(res.data.docs)
        })
      setText('')
    }


  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className='form-control'>
          <div className='relative'>
            <input
              type='text'
              className='w-full pr-40 bg-gray-200 input input-lg text-black'
              placeholder='Search'
              value={text}
              onChange={handleChange}
            />
            <button
              type='submit'
              className='absolute top-0 right-0 rounded-l-none w-36 btn btn-lg'
            >
              Go
            </button>
          </div>
        </div>
      </form>
      {text === '' ?
        <div>
          <div className='grid grid-cols-2 gap-1 py-4 md:grid-cols-4 '>
            {info.slice(0, numberOfItems).map((character) => (
              <div key={character._id}>
                <a href={character.wikiUrl}>{character.name}</a>
              </div>
            ))}
          </div>
          <div className="container flex justify-center py-4">
            <button className="px-5 py-2 hover:bg-gray-600 active:bg-gray-900" onClick={() => handleClick()}>
              {showMore ? "SHOW LESS" : "SHOW MORE"}
            </button>
          </div>
        </div>
        :
        <div>

        </div>
      }
    </div>
  )
}

export default Characters