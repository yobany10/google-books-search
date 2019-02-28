import React, { Component } from 'react';
import Nav from "./components/Nav";
import Jumbotron from "./components/Jumbotron"
import { Input, FormBtn } from "./components/Form";

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Jumbotron />

          <form className="formSection">
              <Input
                // value={this.state.title}
                // onChange={this.handleInputChange}
                name="title"
                placeholder="Title (required)"
              />
              <FormBtn
                // disabled={!(this.state.title)}
                // onClick={this.handleFormSubmit}
              >
                Search
              </FormBtn>
          </form>

      </div>
      );
  }
}

export default App;
