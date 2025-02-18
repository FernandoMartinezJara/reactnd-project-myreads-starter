import React from 'react';
import Book from './book';
import PropTypes from 'prop-types';
import { getShelfValue } from './shelfs';

/**
* @description Represents a list of books filtered by his shelf
* @props {string} shelf - shelf to filter and display
* @props {array} books - books objects to display
* @props {function} updateBook - function to change shelf
*/
const BooksByShelf = ({ shelf, books, updateBook }) => {
    
    let _shelf = getShelfValue(shelf);

    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{ shelf }</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {
                        books.filter(x => x.shelf === _shelf)
                        .map((book) => (
                            <Book 
                                book={ book } 
                                key={ book.id} 
                                updateBook={ updateBook }
                            />
                        ))
                    }
                </ol>
            </div>
        </div>
    )
}

BooksByShelf.propTypes = {
    shelf: PropTypes.string.isRequired,
    books: PropTypes.array.isRequired,
    updateBook: PropTypes.func.isRequired
}

export default BooksByShelf