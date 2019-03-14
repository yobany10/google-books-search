import React from "react";

function Book(props) {
    var book = props.bookData;
    return (
        <div className="book" id={book.key}>

            <div className="book-header">
                <h3>{book.title}</h3>
                <p>Author: {book.authors.join(", ")}</p>
            </div>

            <div className="book-buttons">
                <button type="button"
                onClick={() => {window.open(book.link)}}>View
                </button>
                <button type="button"
                onClick={() => props.saveBook(book)}>Save
                </button>
            </div>

            <img src={book.image} alt={book.title + " Image"} />
            <div className="book-description">
                <p>{book.description}</p>
            </div>
        </div>
    );
}

export default Book;