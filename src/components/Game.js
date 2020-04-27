import React, { Component } from 'react'

export default class Game extends Component {
    constructor(props){
        super(props);
        this.state = {
            xlsNext: true,
            stepNumber: 0,
            history:[
                {squares:Array(9).fill(null)}
            ]
        }
    }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
