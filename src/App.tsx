import React from 'react'
import { Hangman } from './Components/Hangman'
import './App.css'

const App = () => {

  const [word, setWord] = React.useState<string>("")
  const [isGameStarted, setIsGameStarted] = React.useState<boolean>(false)
  const listOfRandomWords : string[] = [
    "blush", "fallacious", "regret", "decide",
    "humdrum", "wine", "spiteful", "wobble",
    "punishment", "amusing", "bustling", "wandering"]

  const newGame = () => {
    setWord(listOfRandomWords[Math.floor(Math.random() * (listOfRandomWords).length)])
    setIsGameStarted(true)
  }

  return (
    <div id = "container">
      <header className = "detail">
        .
      </header>
      <button
        onClick = {() => {
          newGame()
        }}
      >
        New game
      </button>
      <Hangman
        wordChosen={word}
        gameStarted = {isGameStarted}
      />
      <footer className = "detail">
        .
      </footer>
    </div>
  );
}

export default App