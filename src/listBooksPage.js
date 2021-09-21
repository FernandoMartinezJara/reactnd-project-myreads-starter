import React from "react";
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import Book from "./book";

class ListBooksPage extends React.Component {

    state = {
        books: []
    }
    
    componentDidMount() {
        BooksAPI.getAll()
        .then(books => (
            this.setState({
                books
            })
        ));
    }

    render(){
        const { books } = this.state;

        return(
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">    
                    <div>
                        <div className="bookshelf">
                        <h2 className="bookshelf-title">Currently Reading</h2>
                        <div className="bookshelf-books">
                            <ol className="books-grid">
                                {
                                    books.filter(x => x.shelf === 'currentlyReading')
                                    .map((book, i) => (
                                        <Book book={ book } key={ i }/>
                                    ))
                                }
                            </ol>
                        </div>
                        </div>
                        <div className="bookshelf">
                        <h2 className="bookshelf-title">Want to Read</h2>
                        <div className="bookshelf-books">
                            <ol className="books-grid">
                                {
                                    books.filter(x => x.shelf === 'wantToRead')
                                    .map((book, i) => (
                                        <Book book={ book } key={ i }/>
                                    ))
                                }
                            </ol>
                        </div>
                        </div>
                        <div className="bookshelf">
                        <h2 className="bookshelf-title">Read</h2>
                        <div className="bookshelf-books">
                            <ol className="books-grid">
                                {
                                    books.filter(x => x.shelf === 'read')
                                    .map((book, i) => (
                                        <Book book={ book } key={ i }/>
                                    ))
                                }
                            </ol>
                        </div>
                        </div>
                    </div>
                </div>

                <div className="open-search">
                    <Link 
                        className='open-search-button'
                        to='/search'>
                            Add a book
                    </Link>
                </div>
          </div>
        
        )
        
    }
}


export default ListBooksPage