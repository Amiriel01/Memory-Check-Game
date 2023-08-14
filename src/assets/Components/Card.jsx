import React from 'react';
// import Game from 'react';
// import CardContainer from './CardContainer';

export default function ({ randomCardOrder, updateCurrentCards, character }) {

    const clickCard = () => {
        randomCardOrder();
        updateCurrentCards(character);
        console.log(character)
    }

    return (
        <div onClick={clickCard}>
            <div>
                <div className='character-container'>
                    <img className='images' src={character.image} />
                    <p className='names'>{character.name}</p>
                </div>
            </div>
        </div>


    )
}

