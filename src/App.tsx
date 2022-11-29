import React, { useEffect, useState } from 'react'

type Cell =
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '_'
  | '*'
  | ' '
  | 'F'
  | '@'
type Row = Array<Cell>
type Board = Array<Row>

type Game = {
  board: Board
  id: undefined | string
  state: string | undefined
  winner: string | undefined
}
export function App() {
  const [game, setGame] = useState<Game>({
    board: [],
    id: undefined,
    winner: undefined,
    state: undefined,
  })

  useEffect(function () {
    async function loadExistingGame() {
      const existingGameID = localStorage.getItem('gameID')
      const existingGameDifficulty = localStorage.getItem('gameDifficulty')

      console.log(existingGameID)
      if (existingGameID && existingGameDifficulty) {
        const response = await fetch(
          `https://minesweeper-api.herokuapp.com/games/${existingGameID}`
        )
        if (response.ok) {
          const game = await response.json()
          setGame(game)
          setDifficulty(Number(existingGameDifficulty))
        }
      }
    }
    loadExistingGame()
  }, [])

  async function startOrNewGame(newGameDifficulty: number) {
    const gameOptions = { difficulty: newGameDifficulty }
    const url = 'https://minesweeper-api.herokuapp.com/games'

    const fetchOptions = {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(gameOptions),
    }

    const response = await fetch(url, fetchOptions)
    console.log(response)

    if (response.ok) {
      const newGame = (await response.json()) as Game

      setDifficulty(newGameDifficulty)
      setGame(newGame)
      localStorage.setItem('gameID', newGame.id)
      localStorage.setItem('difficulty', String(newGameDifficulty))
    }
  }

  async function handleClickCell(
    row: number,
    col: number,
    event: React.MouseEvent
  ) {
    if (game.state === 'won' || game.state === 'lost') {
    }
    event.preventDefault()
    const url = `https://minesweeper-api.herokuapp.com/games/${game.id}/check`
    const body = { row, col }
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(body),
    })
    if (response.ok) {
      const newGame = (await response.json()) as Game
      setGame(newGame)
    }
  }
  function changeCellCall(value: string) {
    if (value === 'F') {
      return <img src="⛳️" />
    }
    if (value === '*') {
      return <img src="💣" />
    }
    if (value === '@') {
      return <img src="🇳🇵" />
    }
    return value
  }
  async function handleRightClick(
    row: number,
    col: number,
    event: React.MouseEvent
  ) {
    event?.preventDefault()
    const url = `https://minesweeper-api.herokuapp.com/games/${game.id}/flag`
    const body = { row, col }
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(body),
    })
    if (response.ok) {
      const newGame = (await response.json()) as Game
      setGame(newGame)
    }
  }
  async function handleWin() {
    const url = `https://minesweeper-api.herokuapp.com/games/${game.id}/win`
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
    })
    if (response.ok) {
      const newGame = (await response.json()) as Game
      setGame(newGame)
    }
  }
  // async function handleLose() {
  // const [boardState, setBoardState] = useState(board)
  return (
    <div className="centered">
      <header>
        <h1>MineSweeper</h1>
        <h2>Play the classic game of MineSweeper</h2>

        {/* <button onClick={startOrNewGame} className="button">
          New Game
        </button> */}
        <div className="diffButton">
          <button onClick={() => startOrNewGame(0)}>EASY</button>
          <button onClick={() => startOrNewGame(1)}>INTERMEDIATE</button>
          <button onClick={() => startOrNewGame(2)}>FIENDISH</button>
        </div>
        {/* <h2>Game #:</h2> */}
      </header>
      <main>
        <table>
          <tbody>
            {game.board.map((row, y) => (
              <tr key={y}>
                {row.map((col, x) => (
                  <td
                    key={x}
                    onClick={(e) => handleClickCell(y, x, e)}
                    onContextMenu={(e) => handleRightClick(y, x, e)}
                  >
                    {col}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  )
}

export default App
