import React from "react";

function BookList({children}) {
    return(
        <div className="book-list">
            {children}
        </div>
    );
}

export default BookList;