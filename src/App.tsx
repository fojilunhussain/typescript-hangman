import React from 'react'
import { Hangman } from './Components/Hangman'

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
    <>
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
    </>
  );
}

export default App