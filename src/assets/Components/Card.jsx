import React from 'react';
// import Game from 'react';
// import CardContainer from './CardContainer';

export default function ({ characters, randomCardOrder, updateCurrentCards }) {
    
    const clickCard = () => {
        randomCardOrder();
        updateCurrentCards(characters);
    }

    return (
        <div onClick={clickCard}>
            {characters}
        </div>


    )
}

