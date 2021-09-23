import React from 'react';
import Book from './book';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

/**
* @description Represents a search of books component
* @props {books} books - books objects to display
* @props {function} updateQuery - function to change query for searching books
* @props {function} updateBook - function to change shelf
*/
const SearchBooksPage = ( { books, updateQuery, updateBook }) => {
  return(
    <div className="search-books">
      <div className="search-books-bar">
        <Link 
          className='close-search'
          to='/'>
            Close
          </Link>
        <div className="search-books-input-wrapper">
          <input 
            type="text" 
            placeholder="Search by title or author" 
            onChange= { (event) => updateQuery(event.target.value) }/>
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          { books.length > 0 ? (
            books.map((book) => (
              <Book 
                book={ book } 
                key={ book.id } 
                updateBook={ updateBook }
              />
            ))) : null
          }
        </ol>
      </div>
    </div>
  )
}

SearchBooksPage.propTypes = {
  books: PropTypes.any.isRequired,
  updateQuery: PropTypes.func.isRequired,
  updateBook: PropTypes.func.isRequired
}

export default SearchBooksPage