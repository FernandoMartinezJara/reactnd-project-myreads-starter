import React from 'react';
import PropTypes from 'prop-types';
import { shelfs, getShelfValue } from './shelfs';

/**
* @description Represents a book component
* @props {book} book - book's object to display
* @props {function} updateBook - function to change shelf
*/
const Book = ({ book, updateBook }) => {

    const onSelect = (e) => {
        e.preventDefault();
        updateBook(book, e.target.value)
    };

    const {title, authors, imageLinks } = book;
    let image;

    if(imageLinks && imageLinks.thumbnail){
        image = imageLinks.thumbnail;
    }else if(imageLinks && imageLinks.smallThumbnail){
        image = imageLinks.smallThumbnail;
    }  
    const url = `url(${ image })`;

    return(
        <div className="book">
            <div className="book-top">
                <img className="book-cover" style={{ width: 128, height: 193, backgroundImage: url }} alt=""/>
                <div className="book-shelf-changer">
                <select onChange={ (e) => onSelect(e)} value={ book.shelf }>
                    <option value="move" disabled>Move to...</option>
                    <option value="none">None</option>
                    {
                        shelfs.map( shelf => (
                            <option 
                                key={ shelf } 
                                value={ getShelfValue(shelf) }>
                                    { shelf }
                            </option>
                        ))
                    }
                    <option defaultValue value="one">one</option>
                </select>
                </div>
            </div>
            <div className="book-title">{ title }</div>
            <div className="book-authors">{ authors && authors.join(', ') }</div>
        </div>
    )
}

Book.propTypes = {
    book: PropTypes.object.isRequired,
    updateBook: PropTypes.func.isRequired 
}

export default Book