import BookForm from './components/BookForm/BookForm'
import BookList from './components/BookList/BookList'
import Filter from './components/Filter/Filter'

const App = () => {
  return (
    <div className='app'>
      <header className='app-header'>
        <h2>Book Library App</h2>
      </header>
      <main className='app-main'>
        <div className='app-left-column'>
          <BookForm />
        </div>
        <div className='app-right-column'>
          <Filter />
          <BookList />
        </div>
      </main>
    </div>
  )
}

export default App
