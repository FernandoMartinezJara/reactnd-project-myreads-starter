import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import ListBooksPage from './listBooksPage';
import SearchBooksPage from './searchBooksPage';
import { Route, Switch } from 'react-router-dom';
import NotFoundPage from './notFoundPage';

/**
* @description Represents a root component who`s manage the global state
*/
class BooksApp extends Component {

  state = {
    books: [],
    searchBooks: []
  }

  /**
  * @description get the books from api and set to state
  */
  getBooks = () => {
    BooksAPI.getAll()
    .then(books => (
        this.setState({
            books
        })
    ));
  }

  /**
  * @description update a book´s shelf
  * @params {book} _book - books to update shelf
  * @params {string} shelf - shelf to set a book
  */
  updateBook = (_book, shelf) => {
    BooksAPI.update(_book, shelf)
    .then(() => { 
        _book.shelf = shelf;
        this.setState((currentState) => ({
            books: [...currentState.books.filter(book => book.id !== _book.id), _book]
        }));
    })
  }

  /**
  * @description search books on api and set to state
  * @params {string} query - criteria to search on api
  */
  updateQuery = (query) => {

    if(query === ''){
      this.clearQuery();
    }
    else{

      BooksAPI.search(query)
      .then(searchBooks => {
  
        if(searchBooks.length > 0){
          searchBooks.map(searchBook => {
            const bookToShelf = this.state.books.find(b => b.id === searchBook.id);
  
            if(bookToShelf){
              searchBook.shelf = bookToShelf.shelf;
            }
            
            return searchBook;
          });
        }

          this.setState(() => ({
            searchBooks
          }))
        });    
      }
  }

  /**
  * @description clear the state of books
  */
  clearQuery = () => {
    this.setState((currentState) => ({
      books: currentState.books,
      searchBooks: []
    }))
  }

  render() {

    const { books, searchBooks } = this.state;

    return (
      <div className="app">
        <Switch>

          <Route exact path='/' render={ () => ( 
            <ListBooksPage 
              books= { books }
              getBooks = { this.getBooks }
              updateBook={ (book, shelf) => {
                this.updateBook(book, shelf);
              }}
            />  
          )} />

          <Route path='/search' render={ ({ history }) => ( 
            <SearchBooksPage
              books= { searchBooks }
              updateQuery = { (q) => { this.updateQuery(q) } }
              updateBook={ (book, shelf) => {
                this.updateBook(book, shelf);
                history.push('/');
              }}
            />  
          )} />

          <Route component={ NotFoundPage } />

        </Switch>

      </div>
    )
  }
}

export default BooksApp