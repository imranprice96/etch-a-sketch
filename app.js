
const gridBox = document.querySelector('#grid-box');


for(i=0; i<16; i++){
    for (j=0; j<16; j++) {
        const gridItem = document.createElement('div');
        gridItem.classList.add('gridItem');
        gridBox.appendChild(gridItem);
    }
};

const pixels = document.querySelectorAll('.gridItem');
pixels.forEach(pixel => pixel.addEventListener('mouseover',  (e) => {
    e.target.style.backgroundColor = 'black';
}));


