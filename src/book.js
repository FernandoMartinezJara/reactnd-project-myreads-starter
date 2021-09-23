import React from 'react';
import PropTypes from 'prop-types';

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
                <select onChange={ (e) => onSelect(e)}>
                    <option value="move" disabled>Move to...</option>
                    <option value="none">None</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
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