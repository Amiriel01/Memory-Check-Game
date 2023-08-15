import { useEffect } from 'react';
import Game from './assets/Components/Game';
import './App.css';
import axios from 'axios';
import StartPage from './assets/Components/StartPage';
import LoadingPage from './assets/Components/LoadingPage';
import Winner from './assets/Components/Winner';



export default function App() {
  
  return (
   <div>
    {/* <Winner /> */}
    {/* <LoadingPage /> */}
    <Game />
    {/* <StartPage /> */}
    
   </div>
      
  )
}


