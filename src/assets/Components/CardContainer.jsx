import React, { useState, useEffect } from 'react';
import Card from './Card';
import Game from './Game';

export default function ({ updateCurrentCards, highScore }) {
    //create holding cards for where api cards will go later to test if it works//
    const [cards, setCards] = useState([1, 2, 3, 4, 5, 6]);
    //this function will sort cards randomly//
    const randomCardOrder = () => {
        cards.sort(() => Math.random() > .5 ? -1 : 1)
    }

    //useEffect will check criteria each time highScore updates. If the highScore is equal to the cards array length the winner will be called.//
    const winner = () => {
        document.querySelector('.winner-message').innerText = "You Win!";
    }
    
    useEffect(() => {
        if (highScore === cards.length) {
            // console.log("winner")
            winner();  
        }
    }, [highScore])

    return (
        <div>
            <div>
                <p>Card Container Section</p>
                {/*Map over the card array using each card and the card index.*/}
                {cards.map((card, index) => {
                    return <div key={index}>
                        <Card
                            card={card}
                            updateCurrentCards={updateCurrentCards}
                            randomCardOrder={randomCardOrder} />
                    </div>
                })}
            </div>
                {/*Posts the winner message to the page*/}
            <div className="winner-container">
                <div className='winner-message'></div>

            </div>
        </div>
    )
}

// export default cardContainer;

