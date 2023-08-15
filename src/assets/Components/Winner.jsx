import React from "react";
import winner from './winner.gif'

export default function Winner() {

    return (
        <div className="start-page-container">
            <h1 id="start-page-title">Hogwarts Memory Check Game</h1>
            <h2 id="game-mode-info">You Win!!</h2>
            <div id="loading-gif-container">
                <img id="loading-gif" src={winner} alt="Golden Snitch Flying" />
                </div>
                <div className="buttons-container">
                    <button id="play-again">Play Again</button>
            </div>
        </div>
    )
}