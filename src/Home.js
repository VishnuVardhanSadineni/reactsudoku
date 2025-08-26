import React, { Component } from "react";
import "./Home.css";
import Board from './Components/Board';

class Home extends Component{

    render(){
        return(
            <div className="home-container">
                <h1 className="sudoku-title">Sudoku Game</h1>
                <p className="sudoku-subtitle">Challenge your mind with this classic puzzle game</p>
                <Board />
            </div>
        )
    }
}

export default Home;