//function that splits an element's inner text's letters into individual span elements
const enhance = id => {
    const element = document.getElementById(id), //fetches element
          text = element.innerText.split(""); //splits element text into array
    element.innerText = ""; //removes element's innerText
    
    //generates a span letter for each element, then appends it into the original element
    text.forEach(letter => {
      const span = document.createElement("span"); //create span element
      span.className = "letter"; //add "letter" class to span
      span.innerText = letter; //insert letter into the span element
      element.appendChild(span); //append new span element into the original element
    });
  }
  
  enhance("email");
  
  enhance("town");