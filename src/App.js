import React, { Component } from "react";

class App extends Component {
  state = {
    people: []
  };
  componentDidMount() {
    fetch("http://api.open-notify.org/astros.json")
      .then(res => res.json())
      .then(data => this.setState({ people: data }))
      .catch(err => comnsole.log(err));
  }

  render() {
    return <div>Hi</div>;
  }
}

export default App;
