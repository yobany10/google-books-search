import React, { Component } from "react";
import { Input, FormBtn } from "../components/Form";
import BookList from "../components/BookList";
import API from "../utils/API";

class Search extends Component {
    state = {
        books: [],
        title: "",
        authors: "",
        description: "",
        image: "",
        link: "",
    };

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.title) {
            //
        }
    }

render() {
    return (
        <div>

            <form className="formSection">
              <Input
                name="title"
                placeholder="Title (required)"
              />
              <FormBtn>
                Search
              </FormBtn>
            </form>


        </div>
        );
    }
}

export default Search;