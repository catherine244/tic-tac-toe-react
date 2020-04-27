import React, { Component } from 'react'
import Board from './Board';

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
    handleClick(i){
        const history =this.state.history.slice(0,this.state.stepNumber+1)
    ;}
    render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        return (
            <div className="game">
                <div className="game-board">

                  <Board onClick={(i)=>this.handleClick(i)}
                  squares={current.squares}/>
                </div>
                
            </div>
        )
    }
}
