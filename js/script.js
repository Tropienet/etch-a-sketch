const container = document.querySelector('#container');
const clearButton = document.querySelector('#clear-button');

container.style.gridTemplateColumns = `repeat(16, 1fr)`;
container.style.gridTemplateRows = `repeat(16, 1fr)`;

for(let i=0;i<16;i++){
    
    for(let j=0;j<16;j++){
        
        const div = document.createElement('div');
        div.setAttribute('class', 'block');

        div.addEventListener("mouseenter", () => {
            div.style.background = 'black';
        });

        div.setAttribute('style', 'color: black; background: white; border-style: solid;');
        container.appendChild(div);

    }

} 


clearButton.addEventListener('click', () => {
    let boardSize = prompt("Please enter the size of the new board (max 100)");
    if(boardSize>100){
        console.log('Error');
    }else{
        deleteBoard();
        createBoard(boardSize);
    }
});

function createBoard(a){

    container.style.gridTemplateColumns = `repeat(${a}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${a}, 1fr)`;
    
    for(let i=0;i<a;i++){
    
        for(let j=0;j<a;j++){
            
            const div = document.createElement('div');
            div.setAttribute('class', 'block');
    
            div.addEventListener("mouseenter", () => {
                div.style.background = 'black';
            });
    
            div.setAttribute('style', 'color: black; background: white; border-style: solid;');
            container.appendChild(div);
    
        }
    
    }

}

function deleteBoard(){
    
    let child = container.lastElementChild;
    while(child){
        container.removeChild(child);
        child = container.lastElementChild;
    }
}
