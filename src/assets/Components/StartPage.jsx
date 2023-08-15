import React from "react";
import goldensnitch from './images/goldensnitch.png'

export default function StartPage({setCardAmount}) {

    return (
        <div className="start-page-container">
            <h1 id="start-page-title">Hogwarts Memory Check Game</h1>
            <div className="instuctions-container">
                <img id="goldensnitch-img" src={goldensnitch} alt="Golden Snitch" />
                <h2 id="instructions-title">Instructions</h2>
                <ul id="instructions-steps">
                    <li>1. Choose A Game Mode Below</li>
                    <li>2. Click All Cards Without Repeating </li>
                    <li>3. Win The Game!</li>
                </ul>
            </div>
            <h3 id="game-mode-info">Choose A Game Mode</h3>
            <div className="buttons-container">
                <button id="easy" onClick={() => {
                    setCardAmount(5);
                }}>Easy</button>
                <button id="medium" onClick={() => {
                     setCardAmount(10);
                }}>Medium</button>
                <button id="hard" onClick={() => {
                    setCardAmount(15);
                }}>Hard</button>
            </div>
            <div className="golden-snitch-bottom">
                <img id="goldensnitch-img" src={goldensnitch} alt="Golden Snitch" />
                <img id="goldensnitch-img" src={goldensnitch} alt="Golden Snitch" />
            </div>
        </div>
    )
}