import React, { Component } from "react";

class App extends Component {
  state = {
    people: []
  };
  componentDidMount() {
    fetch("http://api.open-notify.org/astros.json")
      .then(res => res.json())
      .then(data => this.setState({ people: data.people }))
      .catch(err => console.log(err));
  }

  render() {
    const people = this.state.people.map((person, id) => (
      <h3 key={id}>{person.name}</h3>
    ));
    return (
      <div>
        {/* {this.state.people.map((person, id) => (
          <h3 key={id}>{person.name}</h3>
        ))} */}
        {people}
      </div>
    );
  }
}

export default App;
