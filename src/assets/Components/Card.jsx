import React from 'react';
// import Game from 'react';
// import CardContainer from './CardContainer';

export default function ({ characters, randomCardOrder, updateCurrentCards, imageURL, name }) {

    const clickCard = () => {
        randomCardOrder();
        updateCurrentCards(characters);
    }

    return (
        <div onClick={clickCard}>
            <div className='all-characters-container'>
                <div className='character-container'>
                    <img className='images' src={imageURL} />
                    <p className='names'>{name}</p>
                </div>
            </div>
        </div>


    )
}

