let currentGridSize = 16;

function createGrid(size) {
    console.log(`Creating ${size} x ${size} grid`);

    const container = document.getElementById('container');
    
    container.innerHTML = '';

    const squareSize = 960 / size;

    for(let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.classList.add('grid-square');

        square.style.width = `${squareSize}px`
        square.style.height = `${squareSize}px`

        square.addEventListener('mouseenter', function() {
            this.classList.add('hovered');
        });

        container.appendChild(square);
    }

    currentGridSize = size;
}

function createNewGrid() {
    let newSize = prompt('Enter number of squares per side (1-100):');

    if (newSize == null) {
        return;
    }

    newSize = parseInt(newSize);

    if (isNaN(newSize) || newSize < 1 || newSize > 100) {
        alert('ERROR! Invalid number (pick a number between 1 and 100)');
        return;
    }

    createGrid(newSize);
}

window.addEventListener('load', function() {
    console.log('Page loaded, creating initial grid.');
    createGrid(16);
});