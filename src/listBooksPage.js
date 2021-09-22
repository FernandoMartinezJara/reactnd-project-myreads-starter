import React, { Component } from "react";
import { Link } from 'react-router-dom';
import Book from "./book";

class ListBooksPage extends Component {

    componentDidMount() {
        this.props.getBooks();
    }
  
    render(){

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
                                    this.props.books.filter(x => x.shelf === 'currentlyReading')
                                    .map((book) => (
                                        <Book book={ book } key={ book.id } updateBook={ this.props.updateBook }/>
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
                                    this.props.books.filter(x => x.shelf === 'wantToRead')
                                    .map((book) => (
                                        <Book book={ book } key={ book.id } updateBook={ this.props.updateBook }/>
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
                                    this.props.books.filter(x => x.shelf === 'read')
                                    .map((book) => (
                                        <Book book={ book } key={ book.id} updateBook={ this.props.updateBook }/>
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