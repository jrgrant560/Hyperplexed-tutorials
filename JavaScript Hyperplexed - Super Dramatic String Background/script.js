const bgMaster = document.getElementById("bgMaster"),
      bgText = document.getElementById("bgText"), bgImage = document.getElementById("bgImage");

const chars = "abcdefghijklmnopqrstuvqxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";

//function randomChar() {}
randomChar = () => {
  return chars[Math.floor(Math.random() * chars.length)];
}

let bgString = "";

// random characters (from 'chars') are added to a string
randomString = () => {
  bgString = ""; // erases bgString
  for (var i = 1; i < 10001; i++) {
    bgString += randomChar();
  }; //adds 10000 characters to bgString
  return bgString;
}

// triggers a new string generation every time the cursor moves
document.body.onmousemove = (e) => {
  bgText.innerText = randomString();
};
