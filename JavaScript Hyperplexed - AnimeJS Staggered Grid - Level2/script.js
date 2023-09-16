//master parent element containing all the tiles
const wrapper = document.getElementById("tiles");

//calculates the number of columns based on the client view width
let columns = Math.floor(document.body.clientWidth / 50);
//calculates the number of row based on the client view height
let rows = Math.floor(document.body.clientHeight / 50);


//array of colors to cycle through
const colors = [
  "rgb(229,57,33)",
  "rgb(253,216,53)",
  "rgb(244,81,30)",
  "rgb(76,175,80)",
  "rgb(33,150,243)",
  "rgb(156,39,176)"
];

//count of clicks
let toggled = false;

// functions that runs ________ on tile click
function handleOnClick(index) {
  toggled = !toggled;
  
  document.body.classList.toggle("toggled");
  
  // ...not quite sure how this library works and I'm not spending the time to learn it right now...
  anime({
    targets: ".tile",
    opacity: toggled ? 0 : 1,
    //creates the stagger effect across the grid, from the clicked tile
    delay: anime.stagger(50, {
      grid: [columns, rows],
      from: index
    })
  })
}

        
        
//function that creates a tile
// ...still waiting to see why we have this 'index' number...
function createTile(index) { // const createTile = index => {
    const tile = document.createElement("div"); //creates the tile element
  
  tile.classList.add("tile"); //adds the class "tile" to the tile element
  
  tile.onclick = e => handleOnClick(index);
  
  return tile; //returns the new element
}

//function that adds tile elements to the DOM based on a given 'quantity' of tiles
function createTiles(quantity) { //const createTiles = quantity => {
  //creates an array of the tiles, appending each tile to the DOM
  Array.from(Array(quantity)).map((tile, index) => {
    wrapper.appendChild(createTile(index));
  })
}

//function that resets tile count
function createGrid() { //const createGrid = () => {
  wrapper.innerHTML = ""; //clears out wrapper
  
  columns = Math.floor(document.body.clientWidth / 50); //recalculate columns
  rows = Math.floor(document.body.clientHeight / 50); //recalculate rows
  
  //adds new style variables from their respective javascript variables
  wrapper.style.setProperty("--columns", columns);
  wrapper.style.setProperty("--rows", rows); 
  
  createTiles(columns * rows); //creates the tiles
}

//window resize listener
window.onresize = () => createGrid();