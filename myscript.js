const board = document.querySelector('.board');
const grid = {rows:16, cols:16};
const total = grid.rows * grid.cols;
let color = 'black';



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
