import React, { Component } from 'react'
import axios from 'axios'

export default class SingleCreature extends Component {
    state = {
        creature: {
            name: "",
            description: ""
        }
    }

    componentDidMount() {
        this.getCreature()
    }

    getCreature = () => {
        axios.get(`/api/creatures/${this.props.match.params.creatureId}`)
            .then((res) => {
                console.log(res.data)
                this.setState({ creature: res.data })
            })
    }

    render() {
        return (
            <div>
                        <div>
                            <h2>{this.state.creature.name}</h2>
                            <p>{this.state.creature.description}</p>
                        </div>
                    </div>
        )
    }
}
