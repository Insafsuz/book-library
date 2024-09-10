import { useDispatch, useSelector } from 'react-redux'
import {
  resetFilters,
  setAuthorFilter,
  setOnlyFavoriteFitler,
  setTitleFilter,
} from '../../redux/slices/filterSlice'
import './Filter.css'

const Filter = () => {
  const { title, author, onlyFavorite } = useSelector(state => state.filter)
  const dispatch = useDispatch()

  const handleTitleFilterChange = e => {
    dispatch(setTitleFilter(e.target.value))
  }

  const handleAuthorFilterChange = e => {
    dispatch(setAuthorFilter(e.target.value))
  }

  const handleOnlyFavoriteFilterChange = () => {
    dispatch(setOnlyFavoriteFitler())
  }

  const handleResetFilters = () => {
    dispatch(resetFilters())
  }

  return (
    <div className='app-block filter'>
      <div className='filter-row'>
        <div className='filter-group'>
          <input
            value={title}
            type='text'
            placeholder='Filter by title...'
            onChange={handleTitleFilterChange}
          />
        </div>
        <div className='filter-group'>
          <input
            value={author}
            type='text'
            placeholder='Filter by author...'
            onChange={handleAuthorFilterChange}
          />
        </div>
        <div className='filter-group'>
          <label>
            <input
              type='checkbox'
              checked={onlyFavorite}
              onChange={handleOnlyFavoriteFilterChange}
            />
            Only favorite
          </label>
        </div>
        <button onClick={handleResetFilters}>Reset filters</button>
      </div>
    </div>
  )
}

export default Filter
