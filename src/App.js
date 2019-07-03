// create your App component here
import React, { Component } from 'react'

export default class App extends Component{

  constructor(){
    super()
    this.state = {
      humansInSpace: []
    }
  }

  render(){
    return(
      <ul>
        {this.state.humansInSpace.map((human, i) => {
          console.log('in map')
          return <li key={i}>{human.name}</li> 
        })}
      </ul>
    )
  }

  saveHumans = (people) =>{
    this.setState({
      humansInSpace: people
    })
  }

  componentDidMount(){
    fetch("http://api.open-notify.org/astros.json")
    .then(res => res.json())
    .then(
      (result) => {
        console.log(result.people)
        this.saveHumans(result.people)
      }
    )
  }



}
