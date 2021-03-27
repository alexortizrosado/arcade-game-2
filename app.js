// state
const initialState = {
  players: ['x', 'o'],

  // multi-dimensional array
  board: [
    [null, null, 'x'],
    ['x', 'o', null],
    [null, 'o', null]
  ]
}


// In a multi-dimensional array, to get the 1st square on the 2nd row
// initialState.board[1][0]

function buildInitialState() {
    renderState()
}

// render
function renderState() {
    const app = $('#app')
    app.empty()
    initialState.board.forEach(function(row, rowIndex) {
        // console.log(row)
        row.forEach(function(square, squareIndex) {
            // console.log(square)
            const squareElement = $(
                `<div class="square" data-row="${rowIndex}" data-square="${squareIndex}">
                    ${square}
                </div>`
            )
            app.append(squareElement)

        })
    })

}

// maybe a dozen or so helper functions for tiny pieces of the interface

// listeners
function onSquareClick() {
    if ($(this).text().trim() === "null") {
        const row = $(this).data("row")
        const square = $(this).data("square")

        initialState.board[row][square] = '♦️';
        initialState.board[row][square] = '🥯';
        // is this a winning space?
        renderState()
    }


  // update state, maybe with another dozen or so helper functions...

//   renderState() // show the user the new state
}

buildInitialState()

$('#app').on('click', '.square', onSquareClick); // etc