let currentGridSize = 16;

const colors = [
    '#FF6B6B', 
    '#4ECDC4', 
    '#45B7D1', 
    '#96CEB4', 
    '#FFEAA7', 
    '#DDA0DD', 
    '#98D8C8', 
    '#F7DC6F', 
    '#BB8FCE', 
    '#85C1E9'  
];

function createGrid(size) {
    console.log(`Creating ${size} x ${size} grid`);

    const container = document.getElementById('container');
    
    container.innerHTML = '';

    const squarePercentage = 100 / size;
    const squareHeight = 960 / size;

    for(let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.classList.add('grid-square');

        square.style.width = `${squarePercentage}%`
        square.style.height = `${squareHeight}px`

        square.dataset.hoverCount = '0';

        square.addEventListener('mouseenter', function() {
            let hoverCount = parseInt(this.dataset.hoverCount);
            hoverCount++;
            this.dataset.hoverCount = hoverCount;

            const colorIndex = (hoverCount - 1) % colors.length;
            const color = colors[colorIndex];

            const opacity = Math.min(0.2 + (hoverCount - 1) * 0.1, 1.0);
            this.style.backgroundColor = color;
            this.style.opacity = opacity;

            console.log(`Square hovered ${hoverCount} times, color: ${color}, opacity: ${opacity}`);
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