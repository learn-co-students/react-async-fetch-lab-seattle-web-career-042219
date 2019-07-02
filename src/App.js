import React, { Component } from 'react';

const URL = 'http://api.open-notify.org/astros.json'

class App extends Component {

    state = {
        inSpace: []
    }

    render() {
        return (
            <div>
                {this.state.inSpace}
            </div>
        )
    }

    componentDidMount() {
        fetch(URL)
        .then(resp => resp.json())
        .then(data => this.setState({ inSpace: data }))
    }
}

export default App;
