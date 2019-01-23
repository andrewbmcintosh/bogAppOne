import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import CreatureForm from './CreatureForm';


export default class Creatures extends Component {

    state = {
        creatures: [{}],
        toggleForm: false
    }


    componentDidMount() {
        this.getAllCreatures()
    }

    getAllCreatures = () => {
        axios.get('/api/creatures')
            .then((res) => {
                this.setState({ creatures: res.data })
            })
    }

    toggle = () => {
        this.setState({toggleForm: !this.state.toggleForm})
    }



    render() {
        return (
            <div>
                <h1>Hello from Creatures Page</h1>
                {this.state.creatures.map((creatures, i) => (
                    <div key={i}>
                        <div>
                          <Link to={`/creatures/${creatures._id}`}><p>{creatures.name}</p></Link>
                        </div>
                    </div>
                ))}
                <button onClick={this.toggle}>Add a new Creature</button>
                {this.state.toggleForm ? <CreatureForm getAllCreatures={this.getAllCreatures}/> : null}
            </div>
        )
    }
}
