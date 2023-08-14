import React from 'react';
// import Game from 'react';
// import CardContainer from './CardContainer';

export default function ({characters, randomCardOrder, updateCurrentCards, imageURL, name}) {
    
    const clickCard = () => {
        randomCardOrder();
        updateCurrentCards(characters);
    }

    return (
        <div onClick={clickCard}>
            <img src={imageURL}/>
            {name}
        </div>


    )
}

