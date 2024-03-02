const container = document.querySelector('.container');
const gridSizeButton = document.querySelector('.grid-size-button');

let gridSize = 16;
let gridPixelSize = 500;

GenerateGrid();

gridSizeButton.addEventListener('click', () => {
    let size = prompt('What size the grid should be?');
    
    while(!IsSizeValid(size)){
        size = prompt('What size the grid should be?');
    }

    SetNewGridSize(size);
})

function GenerateGrid(){
    for(let i = 0; i < gridSize * gridSize; i++){
        let div = document.createElement('div');
    
        div.style.flex = 1;
        div.style.flexBasis = `${gridPixelSize / gridSize}px`;
        div.style.height = `${gridPixelSize / gridSize}px`;
    
        div.addEventListener('mouseover', ()=>{
            let randomColor = Math.floor(Math.random()*16777215).toString(16);
            div.style.background = `#${randomColor}`;
        })
    
        container.appendChild(div);
    }
}

function SetNewGridSize(size){
    gridSize = size;

    container.innerHTML = '';

    GenerateGrid();
}

function IsSizeValid(size){
    size = Number.parseInt(size);

    if(!Number.isInteger(size) || size > 100 || size < 1)
        return false;

    return true;
}