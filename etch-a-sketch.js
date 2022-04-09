const x = new Array(16);
for (let i = 0; i < x.length; i++) {
    x[i] = document.createElement('div');
    x[i].classList.add('row');
    const y = new Array(16);
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