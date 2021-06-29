import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Dictionary from "./Main";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: ["단어", "뜻", "예시"],
    };
  }

  render() {
    return (
      <div className="App">
        <h1>나의 단어장</h1>
        <Dictionary />
      </div>
    );
  }
}

export default App;
