
import React, { Component } from 'react';
import axios from 'axios'

class CreatureForm extends Component {
    state = {
        creature: {
            name: "",
            description: ""
        }
    }

    handleChange = (e) => {
        const newCreature = { ...this.state.creature }
        newCreature[e.target.name] = e.target.value
        console.log(newCreature)
        this.setState({ creature: newCreature })
    }

    createCreature = () => {
        axios.post('/api/creatures', {
            creature: this.state.creature
        }).then((res) => {
            // for some reason its setting the state to
            this.props.getAllCreatures()
            document.getElementsByTagName('input').value = ""
        })
    }


    render() {
        return (
            <div>
                <input placeholder="name" name="name" onChange={this.handleChange} />
                <input placeholder="description" name="description" onChange={this.handleChange} />
                <button onClick={this.createCreature}> Add New User</button>
            </div>
        );
    }
}

export default CreatureForm;