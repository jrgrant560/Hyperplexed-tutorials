const menu = document.getElementById("menu");

//adds an active index data value to the menu when a menu item has a mouseover event
Array.from(document.getElementsByClassName("menu-item")).forEach((item, index) => {
  item.onmouseover = () => {
    menu.dataset.activeIndex = index;
  }
});