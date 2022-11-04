03/11/22 - Jason suggested using a table...

<table>
<th> = table heading (headings)
<tr> = table row (rows)
<td> = table data (cell)

array for the board: [
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

created a board (starting with 3 rows to begin)

create a handleClickCell (ultimately to activate a cell to reveal a "square")

hook up button to create a new game - added API

P:roblem

- create a game board
- supply a button to create a new game
- occupy the board with mines, flags, blank squares, and numbers
- allow the user to click on a square to reveal it
- allow the user to flag a square
- allow the user to unflag a square
- allow the user to click on a square with a number to reveal all adjacent squares
- allow the user to click on a square with a mine to end the game
- allow the user to click on a square with no adjacent mines to reveal all adjacent squares
- allow the user to win the game by revealing all non-mine squares
- allow the user to start a new game
- allow the user to see how many mines are left to flag
- allow the user to see how many squares are left to reveal
- allow the user to see how many flags are left to place

E:xamples
Mine Sweeper
https://www.google.com/search?q=minesweeper&sxsrf=ALiCzsa3ME6cWg63cExoeKnSTSau4MQvJw%3A1667520275295&source=hp&ei=E1dkY_H2DtCmqtsPs6SOyA8&iflsig=AJiK0e8AAAAAY2RlI7HQN2fWXzA65AXsd5Ii9yEPhN8O&gs_ssp=eJzj4tDP1TewLMkoNGD04s7NzEstLk9NLUgtAgBUWwe-&oq=mine&gs_lp=Egdnd3Mtd2l6uAED-AEBKgIIADIKEC4YsQMYgAQYJzIEECMYJzIIEAAYgAQYsQMyCBAuGIAEGLEDMggQABiABBixAzIFEAAYgAQyCxAuGIAEGLEDGIMBMggQLhiABBixAzIFEAAYgAQyBRAAGIAEwgIEEC4YJ8ICCxAAGIAEGLEDGIMBwgIOEC4YgAQYsQMYgwEY1ALCAggQLhixAxiDAcICERAuGIAEGLEDGIMBGMcBGNEDwgILEC4YgAQYxwEY0QPCAgUQLhiABMICCxAuGIAEGLEDGNQCwgIIEAAYgAQYyQPCAgsQLhiDARixAxiABMICChAuGIAEGNQCGApI0hZQAFiyC3ABeADIAQCQAQCYAYMCoAH7BqoBBTAuMy4y&sclient=gws-wiz

D:ata Structure

- table
- button
- array
- cell
- mine, flag, blank square, number

A:lgorithm
The simplest algorithm is to place all of the mines randomly. (Make sure you don't overlap them!)
Problem: The player's first click might be a mine.
Improvement: Delay the generation of the grid until the user clicks on the first square, and don't put any mines in that square.
Problem: The player's first click might reveal a non-zero number, and they will be forced to click randomly until something opens up.

subtract the number that is written in the square (the true number of mines that are around it). That is the number of unrevealed mines left around this square. Divide that by the number of unrevealed squares around the current square. That is the probability of each of the adjacent square containing a mine. If the probability is 1, then flag the square. If the probability is 0, then reveal the square.

C:ode
