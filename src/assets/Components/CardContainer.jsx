import React, { useState, useEffect } from 'react';
import Card from './Card';
import axios from 'axios';


export default function ({ updateCurrentCards, highScore,gameMode, setDeclareWinner }) {

    const [characters, setCharacters] = useState([]);
    
    
    useEffect(() => {
        const getCharacters = async function () {
            const baseURL = "https://hp-api.onrender.com/api/characters";
            const response = await axios.get(baseURL);
            const data = response.data.filter(char => char.image);
            
            let fiveRandomCharacters = [];
            for (let i = 0; i < gameMode; i++) {
                let filterData = data.filter((character) => !fiveRandomCharacters.includes(character))
                const index = Math.floor(Math.random() * filterData.length);
                fiveRandomCharacters.push(filterData[index]);
                   
                
            }
            setCharacters(fiveRandomCharacters);
        }
        getCharacters();
    }, [])

    //this function will sort cards randomly//
    const randomCardOrder = () => {
        characters.sort(() => Math.random() > .5 ? -1 : 1)
    }

    //useEffect will check criteria each time highScore updates. If the highScore is equal to the cards array length the winner will be called.//
    

    const winner = () => {
        // document.querySelector('.winner-message').innerText = "You Win!";
        setDeclareWinner(true);
    }

    useEffect(() => {
        if (highScore === characters.length) {
            
            winner();
        }
    }, [highScore])

    // useEffect(() => {
    //     randomCardOrder();
    // })

    return (
        <div>
            <div className="card-container">
                {/* <p>Card Container Section</p> */}
                {/*Map over the characters array using each character and the character index.*/}
                {characters.map((character) => {
                    
                    return <div key={character.id}>
                        <Card
                            // key={index}
                            character={character}
                            // imageURL={character.image}
                            // name={character.name}
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



