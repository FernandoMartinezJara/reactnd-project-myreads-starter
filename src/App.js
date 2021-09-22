import React from 'react';
import * as BooksAPI from './BooksAPI'
import './App.css';
import ListBooksPage from './listBooksPage';
import SearchBooksPage from './searchBooksPage';
import { Route } from 'react-router-dom';

class BooksApp extends React.Component {

  state = {
    books: []
  }

  getBooks = () => {
    BooksAPI.getAll()
    .then(books => (
        this.setState({
            books
        })
    ));
  }

  updateBook = (_book, shelf) => {
    BooksAPI.update(_book, shelf)
    .then(() => { 
        _book.shelf = shelf;
        this.setState((currentState) => ({
            books: [...currentState.books.filter(book => book.id !== _book.id), _book]
        }));
    })
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

  render() {

    const { books } = this.state;

    return (
      <div className="app">

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
            books= { books }
            updateQuery = { (q) => { this.updateQuery(q) } }
            updateBook={ (book, shelf) => {
              this.updateBook(book, shelf);
              history.push('/');
            }}
          />  
        )} />

      </div>
    )
  }
}

export default BooksApp
