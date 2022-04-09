function generateGrid(size) {
    const x = new Array(size);
    for (let i = 0; i < x.length; i++) {
        x[i] = document.createElement('div');
        x[i].classList.add('row');
        const y = new Array(size);
        for (let j = 0; j < y.length; j++){
            y[j] = document.createElement('div');
            y[j].classList.add('square');
            x[i].appendChild(y[j]);
        }
    }

    const container = document.querySelector('#container');
    for (let i = 0; i < x.length; i++) {
        container.appendChild(x[i]);
    }
}

function changeSquare() {
    const squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
        square.addEventListener('mouseover', () => {
            if (square.style['background-color'] === "black") {
                    square.style['background-color'] = "white";
            }
            else {
                square.style['background-color'] = "black";
            }
        });
    });
}

function clearGrid() {
    const container = document.querySelector('#container');
    let children = container.children;
    for (let i = children.length - 1; i >= 0; i--) {
        container.removeChild(children[i]);
    }
}

generateGrid(16);
changeSquare();

const reset = document.querySelector('#reset');
reset.addEventListener('click', () => {
    let size;
    do {
        size = parseInt(prompt("Enter desired grid size: "));
    } while (size > 100);
    clearGrid();
    generateGrid(size);
    changeSquare();
});
