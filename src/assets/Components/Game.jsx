//import useState and useEffect from React so they can be used in this component//
import React, { useState, useEffect } from "react";
import CardContainer from "./CardContainer";
// import Card from "./Card"

export default function Game() {
    //set consts for the game//

    //useState accepts the initial state (0) and [] and returns the two values, currentState and the function setCurrentState that updates the state//
    const [currentScore, setCurrentScore] = useState(0);
    const [highScore, setHighScore] = useState(0);
    const [currentCards, setCurrentCards] = useState([]);

    //characters must be used as a prop so it can be read and passed across components in order to display the characters info//
    const updateCurrentCards = (character) => {
        //updateCards function will check to see if the indexOf the characters is -1. If it is -1 the characters is no longer found in the array. The function will then set the characters after looking over the array using the characters prop//
        console.log(currentCards)
        console.log(character)
        if (currentCards.indexOf(character) === -1) {
            //if the characters is picked and is no longer in the array look over the array of characters using the characters prop and set them again//
            setCurrentCards([...currentCards, character])
        } else {
            //When the function does not return a -1 value it will set the currentCards as the default array and reset the score to zero for current score because a characters that was already chosen was chosen again//
            setCurrentCards([]);
            setCurrentScore(0);

        }
    }

    //funtion to incriment score or reset it to 0//

    //useEffect will allows side effects in components. This side effect will count characters for the score update to the DOM//
    useEffect(() => {

        //checks to see if the currentCards array length is 0. If it is resets the current score to 0//
        if (currentCards.length === 0) {
            setCurrentScore(0);
            document.querySelector('.winner-message').innerText = "";
        } else {
            //if currentCards.length is not 0 incriment the score + 1//
            setCurrentScore(currentScore + 1);
        }
        //to stop the useEffect from rendering after every count is made and triggering more effects (counting forever instead of once is the symptom of the above comment) I will pass a dependency for the renders [currentCards].//

        // When currentCards is changed this useEffect will run//
    }, [currentCards])

    //this useEffect function will change the highScore when the currentScore is greater than or equal to the highScore//
    useEffect(() => {
        //checks to see if currentScore is the same or larger than the highScore//
        if (currentScore >= highScore) {
            setHighScore(currentScore);
        }
        //this will rendor when currentScore is changed//
    }, [currentScore])
    //add dif selector
    if (true) {
        return (
            <div>
                {/*Sets the text and updates {score state}*/}
                <div className="score-container">
                    <h1 id="score-title">Score Tracker</h1>
                    <div className="current-high-scores">
                        <h2>Current Score: {currentScore}</h2>
                        <h2>High Score: {highScore}</h2>
                    </div>
                </div>
                {/*updateCurrentCards function to be exported so it can be used in another component. Passed as a key = {property}*/}
                <CardContainer
                    updateCurrentCards={updateCurrentCards}
                    highScore={highScore}
                    currentScore={currentScore}
                />
                <p></p>
            </div>
        )
    }
    // else if{
    //     first page
    // } else {
    //     game win page
    // }
}

