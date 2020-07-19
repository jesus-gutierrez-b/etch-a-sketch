// access the 'main' element
const grid = document.querySelector("main");
// access the clear button
const clear = document.querySelector("#clear");
// default grid created when the webpage launches
createGrid();
// What happens when the clear button is clicked
clear.addEventListener("click", () => {
    let number;
    // delete the current grid
    while(grid.hasChildNodes()){
        let child = grid.lastChild;
        grid.removeChild(child);
    }    
    // ask the user for a new number to build a new grid
    number = prompt(`Please enter a number to create a 'number x number' grid.
(up to 50 x50)`, "1");
    if(number >= 0 && number <= 50){
        createGrid(number);
    // in case the user enters an invalid value
    } else{
        createGrid();
    }
});
// function to create the grid inside the 'main' element
// with a default size of 0 squares
function createGrid(dimensions = 2){
    // Variable to handle each individual cell of the grid
    let square;
    // total number of squares in the grid
    let totalSquares = dimensions * dimensions;
    // grid's style and size
    grid.style.cssText = `grid-template-columns: repeat(${dimensions}, 1fr); 
    grid-template-rows: repeat(${dimensions}, 1fr)`;
    // creation of the grid
    for(let i = 0; i < totalSquares; i++){
        // creation of each grid cell one by one
        square = document.createElement("div");
        // cell's style
        square.style.cssText = "border: 0.5px solid black";
        // create a hover event to change the background color
        square.addEventListener("mouseover", (e) => {
            // sets a color randomly there is not one
            if(e.target.style.background == "" ){
                e.target.style.background = `rgb( ${Math.floor(Math.random() * 256)}, 
                ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)} )`;
            }
        });
        // append cell to the grid
        grid.appendChild(square);
    } // end for
} // end createGrid
