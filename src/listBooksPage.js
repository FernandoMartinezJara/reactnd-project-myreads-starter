import React, { Component } from "react";
import { Link } from 'react-router-dom';
import BooksByShelf from "./booksByShelf";

/**
* @description Represents a list of books
* @props {books} books - books objects to display
* @props {function} updateBook - function to change shelf
*/
class ListBooksPage extends Component {

    componentDidMount() {
        this.props.getBooks();
    }
  
    render(){

        const { books, updateBook } = this.props;
        const shelfs = ['Currently Reading', 'Want to Read' , 'Read'];

        return(
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">    
                    <div>
                        {
                            shelfs.map(_shelf =>  (
                                <BooksByShelf
                                    key={ _shelf } 
                                    shelf={ _shelf }
                                    books={ books } 
                                    updateBook={ updateBook }
                                />
                                )
                            )
                        }
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