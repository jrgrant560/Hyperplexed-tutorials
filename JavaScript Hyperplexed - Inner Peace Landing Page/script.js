const wrapper = document.getElementById("wrapper");

//randomizer function
const rand = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

//function that filters out duplicate index numbers
const uniqueRand = (min, max, prev) => {
  let next = prev;
  
  while(prev === next) next = rand(min, max)
  
  return next;
}

//array of limited config-roundness combinations
const combinations = [
  {configuration: 1, roundness: 1},
  {configuration: 1, roundness: 2},
  {configuration: 1, roundness: 4},
  {configuration: 2, roundness: 2},
  {configuration: 2, roundness: 3},
  {configuration: 3, roundness: 3}
];

let prev = 0;

//interval that loops randomizes configuration and roundness selections
setInterval(() => {
  //selects a unique random combination from  the list
  const index = uniqueRand(0, combinations.length - 1, prev),
        combination = combinations[index];
  
  wrapper.dataset.configuration = combination.configuration;
  wrapper.dataset.roundness = combination.roundness;
  
  prev = index;
}, 3000);
