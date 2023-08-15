import { useEffect, useState } from 'react';
import Game from './assets/Components/Game';
import './App.css';
import axios from 'axios';
import StartPage from './assets/Components/StartPage';
import LoadingPage from './assets/Components/LoadingPage';
import Winner from './assets/Components/Winner';



export default function App() {

  const [loadPageDone, setLoadPageDone] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoadPageDone(true);
    },9700);
  }, []);

  return (
    <div>
      {!loadPageDone ? <LoadingPage /> : <StartPage />}
      {/* <Winner /> */}

      {/* <Game /> */}


    </div>

  )
}


