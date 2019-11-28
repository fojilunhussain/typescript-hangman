import React, { useEffect } from 'react'

interface Props {
    wordChosen: string;
  }

export const Hangman: React.FC<Props> = ({wordChosen}) => {

    const [livesRemaining, setLivesRemaining] = React.useState<number>(10);
    const [guessedLetters, setGuessedLetters] = React.useState<string[]>([]);
    const [wordInProgress, setWordInProgress] = React.useState<string[]>(Array(wordChosen.length).fill("_"));
    const [letterGuessed, setLetterGuessed] = React.useState<string>("");

    useEffect(() => {
        setLivesRemaining(10)
        setGuessedLetters([])
        setWordInProgress(Array(wordChosen.length).fill("_"))
        setLetterGuessed("")
    }, [wordChosen])

    const isGuessUnique = () => {
        if (!guessedLetters.includes(letterGuessed)) {
            makeGuess()
        }
    }

    const makeGuess = () => {
        setGuessedLetters([...guessedLetters, letterGuessed])
        if (wordChosen.split("").includes(letterGuessed)) {
            setWordInProgress(wordChosen.split("").map(
                (currentChar, index) => currentChar === letterGuessed ? currentChar : wordInProgress[index]
            ))   
        } else {
            setLivesRemaining(livesRemaining - 1)
        }
        isGameOver()
    }

    console.log(wordInProgress.join(""))

    const isGameOver = () => {
        if (livesRemaining === 0 || wordInProgress.join("") === wordChosen) {
            console.log("ooo")
        }
    }

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLetterGuessed(event.target.value)
    }

    return (
        <>
            <div>Hangman body goes here</div>
            <div>Word: {wordChosen}</div>
            <div>Word in progress: {wordInProgress.join(" ")}</div>
            <div>Guesses: {guessedLetters}</div>
            <div>Lives remaining: {livesRemaining}</div>
            <div>Make guess:</div>
            <input
                type = "text"
                id = "inputGuess"
                maxLength = {1}
                value = {letterGuessed}
                onChange={onChange}
            />
            <button
                onClick = {() => {
                    isGuessUnique()
                }}
            >
                Guess   
            </button>
        </>
    );
}