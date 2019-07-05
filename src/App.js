import React, { Component } from 'react'
//import other files here

export default class App extends Component {

    state = {people: []}

componentDidMount(){
    fetch('http://api.open-notify.org/astros.json')
        .then(res=>res.json())
        .then(data => this.setState({people: data.people}))  
}
    render() {
        return( 
            <ul>
                {this.state.people.map((person, index) => {
                    return <li key={index}>{person.name}</li>
                 })}
            </ul>
        )
    }
}