const subtitle = document.getElementsByClassName("card-subtitle")[0];

//function that creates a new span element with inner text
//takes in text and an index number
const createWord = (text, index) => {
  const word = document.createElement("span"); //new span element
  
  word.innerHTML = `${text} `;
  
  word.classList.add("card-subtitle-word");
  
  word.style.transitionDelay = `${index * 40}ms`;
  
  return word;
}

//function that inserts new span element into 'subtitle' element
//takes in text and an index number, passes to createWord function
const addWord = (text, index) => subtitle.appendChild(createWord(text, index));

//function that converts a sentence into an array of words, using spaces " " as dividers
const createSubtitle = (text) => {text.split(" ").map(addWord)};

createSubtitle("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.");