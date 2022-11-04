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

  return (
    <div>
      <header>
        <h1>MineSweeper</h1>
        <button className="button">New Game</button>
      </header>
      <p>
        <table>
          <tbody>
            {board.map((row) => (
              <tr>
                {row.map((col) => (
                  <td>{'1'}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </p>
    </div>
  )
}
