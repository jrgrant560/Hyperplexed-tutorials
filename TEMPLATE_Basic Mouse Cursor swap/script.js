const trailer = document.getElementById("trailer");

// event listener function that follows the mouse cursor
window.onmousemove = e => {
  // client x & y positions
  // const x = e.clientX, y = e.clientY;
  // with offsets, which centers the element on the cursor
  const x = e.clientX - trailer.offsetWidth / 2,
        y = e.clientY - trailer.offsetHeight / 2;
  
  
  trailer.style.transform = `translate(${x}px, ${y}px)`;
}