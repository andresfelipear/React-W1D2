import React, { Component } from 'react'

export default class SampleState extends Component {
    state = {
        brand: 'Ford'
    }
    
    updateCar = () =>{
        //This is bad
        // this.state = {
        //     brand:'Tesla'
        // }
        this.setState({
            brand:'Tesla'
        })

    }
    render() {
        return (
            <h1>
                My Car: {this.state.brand}
                <button onClick={this.updateCar}>Click to Change</button>
            </h1>
            
        )
    }
}
