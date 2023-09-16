const trailer = document.getElementById("trailer");

//function that controls the animation for the mouse cursor trailer
const animateTrailer = (e, interacting) => {
    // client x & y positions
  // const x = e.clientX, y = e.clientY;
  // with offsets (divided by 2), which centers the element on the cursor
  const x = e.clientX - trailer.offsetWidth / 2,
        y = e.clientY - trailer.offsetHeight / 2;
  
  const keyframes = {
    // translates the position of the element; changes the scale IF the element is inside an "interactable" element
    transform:
    `translate(${x}px, ${y}px)
    scale(${interacting ? 8 : 1})`
  }
  
  // animate function
  // template: object.animate(animation, options)
  trailer.animate(keyframes, {
    duration: 800,
    fill: "forwards" //prevents the element from returning to its starting position after animation completes
  })
}

//switch statement that changes the icon's class based on the data type provided
// const getTrailerClass = (type) => {
//   switch(type) {
//       case "video":
//         return "myIcon-play";
//     default:
//       return "myIcon-arrow";
//   }
// }

//switch statement that changes the icon's innerHTML based on the data type provided
const getTrailerContent = (type) => {
  switch(type) {
      case "video":
        return "↗";
    default:
      return "▶︎";
  }
}

// event listener function that follows the mouse cursor
window.onmousemove = e => {
  // listener variable that detects if the target is currently inside an "interactable" element
  const interactable = e.target.closest(".interactable");
  //boolean that turns to true if "interactable" function is not null
  const interacting = interactable !== null;
  
  //runs animation function
  animateTrailer(e, interacting);
  
  const icon = document.getElementById("trailer-icon");
  
  // if interacting is not null, set the data type of trailer element to the same data type as interacting element
  trailer.dataset.type = interacting ? interactable.dataset.type : "";
  
  // triggers icon change
  if(interacting) {
    // icon.className = getTrailerClass(interactable.dataset.type);
    icon.innerHTML = getTrailerContent(interactable.dataset.type);
  }
}