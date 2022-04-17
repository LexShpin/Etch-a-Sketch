const sizeSlider = document.querySelector('.size-slider');
const grid = document.querySelector('.grid');
const colorPicker = document.querySelector('.color-picker');

const colorBtn = document.querySelector('.color-mode');
const rainbowBtn = document.querySelector('.rainbow-mode');
const eraserBtn = document.querySelector('.eraser');
const clearBtn = document.querySelector('.clear');

let colorMode = true;
let rainbowMode = false;
let eraserMode = false;

// Creating a grid element
function createGridElement() {
    let gridElement = document.createElement('div');

    gridElement.classList.add('grid-element');

    gridElement.style.width = `${sizeSlider.value * 2}px`;
    gridElement.style.height = `${sizeSlider.value * 2}px`;

    gridElement.style.border = '1px solid black';

    grid.appendChild(gridElement);

    return;
}

// Generating the grid
for (let i = 1; i < sizeSlider.value; i++) {
    
    createGridElement();

    for (let j = 1; j < sizeSlider.value; j++) {
        createGridElement();
    }
}

// Switching between the color, rainbow and eraser 
colorBtn.addEventListener('click', () => {
    colorMode = true;
    rainbowMode = false;
    eraserMode = false;
});

rainbowBtn.addEventListener('click', () => {
    colorMode = false;
    rainbowMode = true;
    eraserMode = false;
});

eraserBtn.addEventListener('click', () => {
    colorMode = false;
    rainbowMode = false;
    eraserMode = true;
})

// Generate random color for Rainbow Mode
function generateRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';

    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
}

// Drawing on the grid with a chosen color
const gridElements = document.querySelectorAll('.grid-element');
gridElements.forEach((element) => element.addEventListener('mouseover', () => {
    if (colorMode == true) {
        element.style.backgroundColor = colorPicker.value;
    } else if (rainbowMode == true) {
        element.style.backgroundColor = generateRandomColor();
    } else if (eraserMode == true) {
        element.style.backgroundColor = '#ffff';
    }
}));

// Clearing all painting from elements
clearBtn.addEventListener('click', () => {
    gridElements.forEach((element) => element.style.backgroundColor = "#ffff");
});