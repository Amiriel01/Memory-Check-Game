//import useState and useEffect from React so they can be used in this component//
import React, {useState, useEffect} from "react";
import CardContainer from "./CardContainer";

const Game = () => {
    //set consts for the game//

    //useState accepts the initial state (0) and [] and returns the two values, currentState and the function setCurrentState that updates the state//
    const [currentScore, setCurrentScore] = useState(0);
    const [highScore, setHighScore] = useState(0);
    const [currentCards, setCurrentCards] = ([]);

    //card must be used as a prop so it can be read and passed across components in order to display the card info//
    const updateCurrentCards = (card) => {
        //updateCards function will check to see if the indexOf the card is -1. If it is -1 the card is no longer found in the array. The function will then set the cards after looking over the array using the card prop//
        if(currentCards.indexOf(card) === -1) {
            //if the card is picked and is no longer in the array look over the array of cards using the card prop and set them again//
            setCurrentCards([...currentCards, card])
        } else { 
            //When the function does not return a -1 value it will set the currentCards as the default array and reset the score to zero for current score because a card that was already chosen was chosen again//
            setCurrentCards([]);
            setHighScore(0);
        }
    }

    //funtion to incriment score or reset it to 0//

    //useEffect will allows side effects in components. This side effect will count cards for the score update to the DOM//
    useEffect(() => {
        //checks to see if the currentCards array length is 0. If it is resets the current score to 0//
        if(currentCards.length === 0) {
            setCurrentScore(0);
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
        if(currentScore >= highScore) {
            setHighScore(currentScore);
        }
        //this will rendor when currentScore is changed//
    }, [currentScore])

    return (
        <div>
            {/*Sets the text and updates {score state}*/}
            Score Tracker
            <br></br>
            Current Score: {currentScore}
            <br></br>
            High Score: {highScore}
            {/*updateCurrentCards function to be exported so it can be used in another component*/}
            <CardContainer
            updateCurrentCards={updateCurrentCards}
            />
        </div>
    )
}

export default Game;