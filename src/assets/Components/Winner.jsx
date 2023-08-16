import React from "react";
import winner from './images/winner.gif'
import App from "../../App";


export default function Winner({setCardAmount, setDeclareWinner }) {
    return (
        <div className="start-page-container">
            <h1 id="start-page-title">Hogwarts Memory Check Game</h1>
            <h2 id="game-mode-info">You Win!!</h2>
            <div id="loading-gif-container">
                <img id="loading-gif" src={winner} alt="Golden Snitch Flying" />
            </div>
            <div className="buttons-container">
                <button id="play-again" onClick={() => {
                    setCardAmount(0);
                    setDeclareWinner(false);
                }}>Play Again</button>
            </div>
        </div>
    )
}