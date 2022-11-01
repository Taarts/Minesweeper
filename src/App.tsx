import React, { useState, useEffect } from 'react'

// export function App() {
type Cell = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | 'F' | '*' | '-' | ' '

type Row = [Cell, Cell, Cell, Cell, Cell, Cell, Cell, Cell]

type board = [Row, Row, Row, Row, Row, Row, Row, Row]

type Game = {
board: board
id: null | number
state: null | 'playing' | 'won' | 'lost' | 'new' 
mines: 9
}

// const [game, setGame] = useState<Board>({
//   id: null,
//   // winner: null,
// })

export function App() {
const [game, setGame] = useState<Game>({
board: [
[' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
[' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
[' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
[' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
[' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
[' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
[' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
[' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
],
id: null,
state: null,
mines: 9,
})





// const body = { row, column }



async function handleClickCell(row: number, column: number){
    const url = `https://minesweeper-api.herokuapp.com/games/${game.id}`
}

  async function handleNewGame() {
    const response = await fetch('https://minesweeper-api.herokuapp.com/games', 
    {
      method: 'POST',
      headers: { 'content-type' : 'application/json' },
        }
    )
    if (response.ok) {
      const newGameState = (await response.json()) as Game
      setGame(newGameState)
    }
  
}

// game
const header = game.state ? `${game.state}` : 'Minesweeper'
return (
<div>
<h1>{header} - {game.id} <button onClick={handleNewGame}>New</button></h1>
{/* <button onClick={() => newGame(0)}>easy</button> */}
<main>
  <ul>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
  </ul>
</main>
</div>
)}