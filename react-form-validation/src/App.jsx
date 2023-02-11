import React, { Component } from "react";
import Form from "./components/Form";
import "./App.css";
class App extends Component {
  render() {
    return (
      <div className="app-container">
        <h1>فرم همکاری</h1>

        <Form />
      </div>
    );
  }
}
export default App;
