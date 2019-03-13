import React, { Component } from "react";
// import Nav from "./components/Nav";
// import Jumbotron from "./components/Jumbotron"
import { Input, FormBtn } from "../components/Form";
import { Link } from "react-router-dom";

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