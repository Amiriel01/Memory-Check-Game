import React from 'react';
// import Game from 'react';
// import CardContainer from './CardContainer';

export default function ({ card, randomCardOrder, updateCurrentCards }) {

    const clickCard = () => {
        randomCardOrder();
        updateCurrentCards(card);
    }

    return (
        <div onClick={clickCard}>
            {card}
        </div>


    )
}

