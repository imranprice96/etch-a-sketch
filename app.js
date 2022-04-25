
const gridBox = document.querySelector('#grid-box');
let size = 16;

function createGrid(size){

    for(let i=0; i<size; i++){
        for (j=0; j<size; j++) {
            const gridItem = document.createElement('div');
            gridItem.classList.add('gridItem');
            gridBox.appendChild(gridItem);
        }
    };

    draw();
};

createGrid(size);

function draw(){
    const pixels = document.querySelectorAll('.gridItem');
    pixels.forEach(pixel => pixel.addEventListener('mouseover',  (e) => {
        let randomColor = Math.floor(Math.random()*16777215).toString(16);
        e.target.style.backgroundColor = `#${randomColor}`;
    }));
};



function clearGrid(){

    while(true){
        size = parseInt(prompt("Enter a new pixel width, (max 100)"));
        if(size <= 100) break;
    };
    const gridBox = document.getElementById('grid-box').innerHTML = '';
    createGrid(size);
    document.getElementById("grid-box").style.gridTemplateColumns = `repeat(${size},1fr)`;
    document.getElementById("grid-box").style.gridTemplateRows = `repeat(${size},1fr)`;

    draw();

};

// add toggle black or color mode
