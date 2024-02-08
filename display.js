generateHTML = function(row, col) {
    // Change this to docuemnt.createElement and other methods, not plaintext injection
    let piece = document.createElement('div');
    piece.className = 'piece';
    piece.id = 'piece' + row + ":" + col;
    piece.addEventListener('click', piecePlaced);
    return piece;
}
// Start Button event listener goes here, will initialize the game and possibly add 

const gameContainer = document.getElementById('gameContainer');
let turn = false;

initBoard = function() {
    // let board = logic.getBoard();
    for (let i = 0; i < 10; i++) {
        let rowHTML = document.createElement('div');
        rowHTML.className = 'row';
        for (let j = 0; j < 10; j++) {
            rowHTML.appendChild(generateHTML(i, j));
        }
        gameContainer.appendChild(rowHTML);
    }
}

piecePlaced = function(event) {
    event.target.style.backgroundColor = (turn) ? 'white' : 'black';
    turn = !turn;
}

initBoard();