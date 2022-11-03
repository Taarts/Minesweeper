import React, { useState, useEffect } from 'react'

export function App() {
  const [game, setGame] = useState({
    board: [
      [' ', '1', 'f', ' '],
      [' ', '2', ' ', ' *'],
      [' ', '- ', ' ', 'f'],
      [' ', '- ', ' ', ' '],
      // [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
      // [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
      // [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
      // [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
      // [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    ],
    id: null,
    state: null,
    mines: 9,
  })

  function handleClickCell(row: number, col: number) {
    console.log({ row, col })
  }
  async function _newGame() {
    const response = await fetch(
      'https://minesweeper-api.herokuapp.com/games',
      {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
      }
    )
    if (response.ok) {
      const newGameState = await response.json()
      setGame(newGameState)
    }
  }
  const header = 'Minesweeper'

  return (
    <div>
      <h1>
        {header} - {game.id} <button onClick={_newGame}>New Game</button>
      </h1>

      <main>
        <ul>
          <li onClick={() => handleClickCell(0, 0)}>{game.board[0][0]}</li>
          <li onClick={() => handleClickCell(0, 1)}>{game.board[0][1]}</li>
          <li onClick={() => handleClickCell(0, 2)}>{game.board[0][2]}</li>
          <li onClick={() => handleClickCell(0, 3)}>{game.board[0][3]}</li>
          <li onClick={() => handleClickCell(1, 0)}>{game.board[1][0]}</li>
          <li onClick={() => handleClickCell(1, 1)}>{game.board[1][1]}</li>
          <li onClick={() => handleClickCell(1, 2)}>{game.board[1][2]}</li>
          <li onClick={() => handleClickCell(1, 3)}>{game.board[1][3]}</li>
          <li onClick={() => handleClickCell(2, 0)}>{game.board[2][0]}</li>
          <li onClick={() => handleClickCell(2, 1)}>{game.board[2][1]}</li>
          <li onClick={() => handleClickCell(2, 2)}>{game.board[2][2]}</li>
          <li onClick={() => handleClickCell(2, 3)}>{game.board[2][3]}</li>
          <li onClick={() => handleClickCell(3, 0)}>{game.board[3][0]}</li>
          <li onClick={() => handleClickCell(3, 1)}>{game.board[3][1]}</li>
          <li onClick={() => handleClickCell(3, 2)}>{game.board[3][2]}</li>
          <li onClick={() => handleClickCell(3, 3)}>{game.board[3][3]}</li>
        </ul>
      </main>
    </div>
  )
}
