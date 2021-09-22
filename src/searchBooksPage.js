import React from 'react';
import Book from './book'
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';

class SearchBooksPage extends React.Component {

  state = {
    books: []
  }

  updateQuery = (query) => {

    if(query.length === 0){
      this.clearQuery();
      return;
    }

    BooksAPI.search(query)
    .then(books => {
        this.setState(() => ({
          books
        }))
      });
  }

  clearQuery = () => {
    this.setState(() => ({
      books: []
    }))
  }

    render(){

      const { books } = this.state;

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
                  onChange= { (event) => this.updateQuery(event.target.value) }/>
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
                { books.length > 0 ? (
                  books.map((book) => (

                    <Book book={ book } key={ book.id } updateBook={ this.props.updateBook }/>
                    
                  ))) : null
                }
              </ol>
            </div>
          </div>
        )
    }
}

export default SearchBooksPage