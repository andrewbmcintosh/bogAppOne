
import React, { Component } from 'react';
import axios from 'axios'

class CreatureForm extends Component {
    state = {
        name: "",
        description: ""
    }

    handleChange = (e) => {
        const newCreature = { ...this.state }
        newCreature[e.target.name] = e.target.value
        console.log(newCreature)
        this.setState({ creature: newCreature })
    }

    createCreature = () => {
        axios.post('/api/creatures', {
            creature: this.state
        }).then((res) => {
            this.setState({ name: "", description: "" })
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