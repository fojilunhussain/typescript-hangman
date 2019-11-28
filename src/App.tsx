import React from 'react'
import { Hangman } from './Components/Hangman'

const App = ({  }) => {

  const [word, setWord] = React.useState<string>("")

  const listOfRandomWords : string[] = [
    "blush", "fallacious", "regret", "decide",
    "humdrum", "wine", "spiteful", "wobble",
    "punishment", "amusing", "bustling", "wandering"]

  const newGame = () => {
    setWord(listOfRandomWords[Math.floor(Math.random() * (listOfRandomWords).length)])
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
      <Hangman wordChosen={word} />
    </>
    

  );

}

export default App