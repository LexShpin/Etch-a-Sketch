const sizeSlider = document.querySelector('.size-slider');
const grid = document.querySelector('.grid');
const colorPicker = document.querySelector('.color-picker');

function createGridElement() {
    let gridElement = document.createElement('div');

    gridElement.classList.add('grid-element');

    gridElement.style.width = `${sizeSlider.value * 2}px`;
    gridElement.style.height = `${sizeSlider.value * 2}px`;

    gridElement.style.border = '1px solid black';

    grid.appendChild(gridElement);

    return;
}

for (let i = 1; i < sizeSlider.value; i++) {
    
    createGridElement();

    for (let j = 1; j < sizeSlider.value; j++) {
        createGridElement();
    }
}

const gridElements = document.querySelectorAll('.grid-element');
gridElements.forEach((element) => element.addEventListener('mouseover', () => {
    element.style.backgroundColor = colorPicker.value;
}));