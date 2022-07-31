const board = document.querySelector('.board');
let grid = {rows:16, cols:16};
let total = grid.rows * grid.cols;
let color = 'black';
let squares = board.querySelectorAll('div');
let value = document.getElementById('value');

function onValueChange(event){
    const  eValue = event.value;
    resetBoard();
    grid = {rows:eValue, cols:eValue};
    total = eValue * eValue;
    createGrid(total);
}
createGrid(total);

function createGrid(tot){
    for(i = 0; i < tot; i++){
        const ele = document.createElement('div');
        board.append(ele);
        ele.classList.add('box');
        ele.addEventListener('mouseover', colorSquare)
    }
    board.style.setProperty(`grid-template-columns`, `repeat(${grid.cols}, 1fr)`);
}

function erase() {
    ele.style.backgroundColor = "white";
}

function colorSquare() {
    if(color === 'random'){
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    }else {
        this.style.backgroundColor = color;
    }
}

function changeColor(choice) {
    color = choice
}


function resetBoard(){
    const board = document.querySelector('.board');
    let squares = board.querySelectorAll('div');
    squares.forEach((div) => div.style.backgroundColor = 'white');
}