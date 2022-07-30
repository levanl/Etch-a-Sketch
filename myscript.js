const board = document.querySelector('.board');
const grid = {rows:16, cols:16};
const total = grid.rows * grid.cols;
const draw = document.querySelector('#colorMode');

// draw.addEventListener('click', )


createGrid(total);

function createGrid(tot){
    for(i = 0; i < tot; i++){
        const ele = document.createElement('div');
        board.append(ele);
        ele.classList.add('box');
    }
    board.style.setProperty(`grid-template-columns`, `repeat(${grid.cols}, 1fr)`)
}

// function colorMode(){

// }