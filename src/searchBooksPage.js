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

    BooksAPI.search(query).then(x => 
      {
        this.setState(() => ({
          books: x
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
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input 
                  type="text" 
                  placeholder="Search by title or author" 
                  onChange= { (event) => this.updateQuery(event.target.value) }/>

              </div>
            </div>
            <div className="search-books-results">

              <ol className="books-grid">
                { books.length > 0 ? (
                  books.map((book, i) => (
                    <Book book={ book } key={ i }/>
                  ))) : null
                }
              </ol>
            </div>
          </div>
        )
    }
}

export default SearchBooksPage