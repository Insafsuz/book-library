import { BsBookmarkStar, BsBookmarkStarFill } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import { deleteBook, toggleFavorite } from '../../redux/books/actionCreators'
import './BookList.css'

const BookList = () => {
  const books = useSelector(state => state.books)
  const { title, author, onlyFavorite } = useSelector(state => state.filter)
  const dispatch = useDispatch()

  const handleDeleteBook = id => {
    dispatch(deleteBook(id))
  }

  const handleToggleFavorite = id => {
    dispatch(toggleFavorite(id))
  }

  const filteredBooks = books.filter(book => {
    const matchesTitle = book.title.toLowerCase().includes(title)
    const matchesAuthor = book.author.toLowerCase().includes(author)
    const matchesFavorite = onlyFavorite ? book.isFavorite : true
    return matchesTitle && matchesAuthor && matchesFavorite
  })

  const highlightMatch = (text, filter) => {
    if (!filter) return text

    const regex = new RegExp(`(${filter})`, 'gi')

    return text.split(regex).map((substring, i) => {
      if (substring.toLowerCase() === filter.toLowerCase()) {
        return (
          <span key={i} className='highlight'>
            {substring}
          </span>
        )
      }
    })
  }

  return (
    <div className='app-block book-list'>
      <h2>Book list</h2>
      <ul>
        {filteredBooks.map((book, i) => (
          <li key={book.id}>
            <div className='book-info'>
              {++i}. 
              {highlightMatch(book.title, title)} by{' '}
              <strong>{highlightMatch(book.author, author)}</strong>
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
