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

  componentDidMount() {
      this.getBooks();
  }

  getBooks() {
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

  render() {
    
    const { books } = this.state;

    return (
      <div className="app">

        <Route exact path='/' render={ () => ( 
          <ListBooksPage books= { books } updateBook={ (book, shelf) => {
            this.updateBook(book, shelf);
          }}/>  
        )} />

        <Route path='/search' render={ ({ history }) => ( 
          <SearchBooksPage updateBook={ (book, shelf) => {
            this.updateBook(book, shelf);
            history.push('/');

          }}/>  
        )} />

      </div>
    )
  }
}

export default BooksApp
