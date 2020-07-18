// access the 'main' element
const grid = document.querySelector("main");
//const cells = document.querySelectorAll("div");

createGrid(16);
// function to create the grid inside the 'main' element
// with a default size of 0 squares
function createGrid(dimensions = 0){
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
        // append cell to the grid
        grid.appendChild(square);
    } // end for
} // end createGrid
/*
cells.forEach((div) => {
    div.addEventListener("mouseover", () =>{
        div.style.cssText = "background-color: gold";
    });
});
*/