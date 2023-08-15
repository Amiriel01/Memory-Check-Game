import { useEffect, useState } from 'react';
import Game from './assets/Components/Game';
import './App.css';
import axios from 'axios';
import StartPage from './assets/Components/StartPage';
import LoadingPage from './assets/Components/LoadingPage';
import Winner from './assets/Components/Winner';



export default function App() {
  //transition from loading to start page//
  const [loadPageDone, setLoadPageDone] = useState(false);
  const [characters, setCharacters] = useState([]);
  const [cardAmount, setCardAmount] = useState(0);
  const [declareWinner, setDeclareWinner] = useState(false);
  const [backToStart, setBackToStart] = useState(false);

  useEffect(() => {
    const getCharacters = async function () {
      const baseURL = "https://hp-api.onrender.com/api/characters";
      const response = await axios.get(baseURL);
      const data = response.data.filter(char => char.image);

      let fiveRandomCharacters = [];
      for (let i = 0; i < cardAmount; i++) {
        let filterData = data.filter((character) => !fiveRandomCharacters.includes(character))
        const index = Math.floor(Math.random() * filterData.length);
        fiveRandomCharacters.push(filterData[index]);
      }
      //shorter gif maybe!//
      setCharacters(fiveRandomCharacters);
      setTimeout(() => {
        setLoadPageDone(true);
      }, 9300);
    }
    getCharacters();
  }, [cardAmount])


  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoadPageDone(true);
  //   }, 9700);
  // }, []);


  // const [hasLoaded, setHasLoaded] = useState(false);
  return (
    <div>
      {!loadPageDone ? <LoadingPage /> : (
        <>
          {cardAmount === 0 ?
            <StartPage
              setCardAmount={setCardAmount} /> : (
              <>
                {!declareWinner ?
                  <Game
                    characters={characters}
                    setDeclareWinner={setDeclareWinner} /> : (
                    <>
                      {!backToStart ?
                        <Winner /> : <StartPage />}
                    </>
                  )}
              </>
            )}
        </>

      )}
    </div>
  )
}


