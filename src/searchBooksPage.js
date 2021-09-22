import React from 'react';
import Book from './book';
import { Link } from 'react-router-dom';

class SearchBooksPage extends React.Component {

    render(){

      const { books, updateQuery, updateBook } = this.props;

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
                  <Book book={ book } key={ book.id } updateBook={ updateBook }/>
                ))) : null
              }
            </ol>
          </div>
        </div>
      )
    }
}

export default SearchBooksPage