import React, { Component } from "react";

class App extends Component {
  componentDidMount() {
    fetch("http://api.open-notify.org/astros.json")
      .then(res => res.json())
      .then(data => console.log(data));
  }

  render() {
    return <div>Hi</div>;
  }
}

export default App;
