import React, { Component } from "react";
import { Input, FormBtn } from "../components/Form";
import BookList from "../components/BookList";
import API from "../utils/API";
import Book from "../components/Book";

class Search extends Component {
    state = {
        search: "",
        books: [],
        currentList: "Results"
    }

    searchBooks = () => {
        API.searchBook("?q=" + this.state.search).then(res => {
            var books = [];
            res.data.forEach(i => {
                var temp = {
                    key: i.id,
                    title: i.volumeInfo.title,
                    authors: i.volumeInfo.authors,
                    image: i.volumeInfo.thumbnail,
                    link: i.volumeInfo.infoLink,
                    description: i.volumeInfo.description
                }
                books.push(temp);
            });
            this.setState({books: books});
        });
    }

    saveBook = book => {
        API.saveBook({
            title: book.title,
            authors: book.authors,
            link: book.link,
            description: book.description,
            image: book.image,
            googleId: book.key
        })
        .then(res => book)
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
    return (
        <div>
        </div>
        );
    }
}

export default Search;