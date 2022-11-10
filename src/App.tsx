import React from 'react'

export function App() {
  const board = [
    ['null', 'null', 'null', 'null', 'null', 'null', 'null', 'null'],
    ['null', 'null', 'null', 'null', 'null', 'null', 'null', 'null'],
    ['null', 'null', 'null', 'null', 'null', 'null', 'null', 'null'],
    ['null', 'null', 'null', 'null', 'null', 'null', 'null', 'null'],
    ['null', 'null', 'null', 'null', 'null', 'null', 'null', 'null'],
    ['null', 'null', 'null', 'null', 'null', 'null', 'null', 'null'],
    ['null', 'null', 'null', 'null', 'null', 'null', 'null', 'null'],
    ['null', 'null', 'null', 'null', 'null', 'null', 'null', 'null'],
    ['null', 'null', 'null', 'null', 'null', 'null', 'null', 'null'],
  ]

  function handleClickCell(event: React.MouseEvent) {
    event.preventDefault()
    console.log('clicked cell')
  }

  return (
    <div>
      <header>
        <h1>MineSweeper</h1>
        <button className="button">New Game</button>
      </header>
      <p>
        <table>
          <tbody>
            {board.map((row, y) => (
              <tr>
                {row.map((col, x) => (
                  <td onClick={handleClickCell}></td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </p>
    </div>
  )
}
