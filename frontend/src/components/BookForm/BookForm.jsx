import axios from 'axios'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import booksData from '../../data/books.json'
import { addBook } from '../../redux/books/actionCreators'
import createBookWithId from '../../utils/createBookWithId'
import './BookForm.css'

const BookForm = () => {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = e => {
    e.preventDefault()

    if (title && author) {
      dispatch(addBook(createBookWithId({ title, author }, 'manual')))
      setTitle('')
      setAuthor('')
    }
  }

  const handleRandomBook = () => {
    const randomIndex = Math.floor(Math.random() * booksData.length)
    const randomBook = booksData[randomIndex]
    dispatch(addBook(createBookWithId(randomBook, 'random')))
  }

  const handleRandomBookViaAPI = async () => {
    try {
      const res = await axios.get('http://localhost:4000/random-book')
      if (res?.data?.title && res?.data?.author) {
        dispatch(addBook(createBookWithId(res.data,'API')))
      }
    } catch (error) {
      console.log('Error fetching random book', error)
    }
  }

  return (
    <div className='app-block book-form'>
      <h2>Add a new book</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='title'>Title:</label>
          <input
            type='text'
            id='title'
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor='author'>Author:</label>
          <input
            type='text'
            id='author'
            value={author}
            onChange={e => setAuthor(e.target.value)}
          />
        </div>
        <button type='submit'>Add book</button>
        <button onClick={handleRandomBook}>Radom book</button>
        <button onClick={handleRandomBookViaAPI}>Add random via API</button>
      </form>
    </div>
  )
}

export default BookForm
