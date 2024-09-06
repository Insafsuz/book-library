import { BsBookmarkStar, BsBookmarkStarFill } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import { deleteBook, toggleFavorite } from '../../redux/books/actionCreators'
import './BookList.css'

const BookList = () => {
  const books = useSelector(state => state.books)
  const dispatch = useDispatch()

  const handleDeleteBook = id => {
    dispatch(deleteBook(id))
  }

  const handleToggleFavorite = id => {
    dispatch(toggleFavorite(id))
  }

  return (
    <div className='app-block book-list'>
      <h2>Book list</h2>
      <ul>
        {books.map((book, i) => (
          <li key={book.id}>
            <div className='book-info'>
              {++i}. {book.title} by <strong>{book.author}</strong>
            </div>
            <span onClick={() => handleToggleFavorite(book.id)}>
              {book.isFavorite ? (
                <BsBookmarkStarFill className='star-icon' />
              ) : (
                <BsBookmarkStar className='star-icon' />
              )}
            </span>
            <div className='book-actions'>
              <button onClick={() => handleDeleteBook(book.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default BookList
