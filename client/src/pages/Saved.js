import React, { Component } from "react";
import BookList from "../components/BookList";
import API from "../utils/API";
import SavedBook from "../components/SavedBook";


class Search extends Component { 
    
    state = {
        books: [],
        currentList: "Saved"
    }

    componentDidMount = () => {
        this.loadBooks();
    }

    loadBooks = () => {
        API.getBooks()
        .then(res =>
          this.setState({ books: res.data})
        )
        .catch(err => console.log(err));
    }

    deleteBook = key => {
        console.log(key);
        API.deleteBook(key)
        .then(res => this.loadBooks())
        .catch(err => console.log(err));
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
    }

    handleSubmit = event => {
        event.preventDefault();
        if (this.state.search) {
          this.searchBooks();
        }
    }

    render() {
        return(
            <div>
                <BookList>
                    <h3>{this.state.currentList}</h3>
                    {this.state.books.map(book => (
                        <SavedBook key={book.googleId} bookData={book} deleteBook={this.deleteBook}/>
                    ))}
                </BookList>

            </div>
        )
    };
}

export default Search;