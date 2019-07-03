// create your App component here
import React, {Component} from 'react'

class App extends Component {

	state = {
		people: []
	}
	
	componentDidMount() {
		fetch('http://api.open-notify.org/astros.json')
		.then(resp => resp.json())
		.then(json => {
			this.setState({
				people: json.people 
			})
		})
	}

	render() {
		return (
			<div>
				{ this.state.people.map(person => <h1>{person.name}</h1>) }
			</div>
		)
	}

}

export default App