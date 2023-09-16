const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; //set random multiplier to 26
const letters2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvqxyz"; //set random multiplier to 52
const letters3 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"; //set random multiplier to 36

document.querySelector("h1").onmouseover = (event) => {
  let iterations = 0; //starting value for iterations

  //performs change every 30ms
  const interval = setInterval(() => {
    //event that changes the innerText
    event.target.innerText = event.target.innerText
      .split("") //splits the word into its characters
      .map((letter, index) => {
          if (index < iterations) { //if current item's index is less than the number of iterations run...
            return event.target.dataset.value[index]; //sets the current character being run to element's data-value's character in same position
          }
      
      return letters3[Math.floor(Math.random() * 36)] //converts each character into a random character from 'letters' string
          })
      .join(""); //rejoins the results of each randomized character into a string

    if (iterations >= event.target.dataset.value.length) clearInterval(interval); //stop interval after "element's dataset's string's length" occurences

    iterations += 1 / 3;
  }, 30);
};
