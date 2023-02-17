import React, { Component } from "react";
import CooperationForm from "./components/CooperationForm";
import "./App.css";
class App extends Component {
  render() {
    return (
      <div className="app-container">
        <CooperationForm />
      </div>
    );
  }
}
export default App;
