import React from "react";
import loadpage from './images/loadpage.gif'

export default function LoadingPage() {

    
    return (
        <div className="loading-page">
            <div className="start-page-container">
                <h1 id="start-page-title">Hogwarts Memory Check Game</h1>
                <h2 id="game-mode-info">Preparing The Game . . . .</h2>
                <div id="loading-gif-container">
                    <img id="loading-gif" src={loadpage} alt="Golden Snitch Flying" />
                </div>
            </div>
        </div>
    )
}