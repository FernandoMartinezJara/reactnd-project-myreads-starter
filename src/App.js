import React from 'react';
// import * as BooksAPI from './BooksAPI'
import './App.css';
import ListBooksPage from './listBooksPage';
import SearchBooksPage from './searchBooksPage';
import { Route } from 'react-router-dom';

class BooksApp extends React.Component {

  render() {
    return (
      <div className="app">

        <Route exact path='/' component={ ListBooksPage } />

        <Route path='/search' component={ SearchBooksPage } /> 

      </div>
    )
  }
}

export default BooksApp
