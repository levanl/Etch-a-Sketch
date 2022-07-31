const board = document.querySelector('.board');
let color = 'black';
let squares = board.querySelectorAll('div');
let value = document.getElementById('value');
let isClicked = false;;
function onValueChange(event){
    const eValue = event.value;
    createSquareGridBy(eValue)
}

const boardElement = document.querySelector('.board');
boardElement.addEventListener('click', () => { isClicked = !isClicked })

createSquareGridBy();

function createSquareGridBy(size = 32) {
    resetBoard()
    const totalSquares = size * size;
    for(i = 0; i < totalSquares; i++){
        const ele = document.createElement('div');
        board.append(ele);
        ele.classList.add('box');
        ele.addEventListener('mouseover', colorSquare)
    }
    board.style.setProperty(`grid-template-columns`, `repeat(${size}, 1fr)`);
}

function erase() {
    ele.style.backgroundColor = "white";
}

function colorSquare() {
    if(!isClicked) return;
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
    board.innerHTML = '';
}