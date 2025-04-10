

function darkImage() { //changes the image of the button
  const buttonImage = document.getElementById("darkToggle");
  if (buttonImage.getAttribute('src') === "./moon.png") {
    buttonImage.setAttribute('src', "./sun.png");
  }else {
    buttonImage.setAttribute('src', "./moon.png");
  }
}

function toggleDark() {
  const darkButton = document.getElementById("darkButton")
  const body = document.body;
  const nav = document.topnav;


  body.classList.toggle("dark-mode");
  //nav.classList.toggle("dark-mode");
  darkImage()
}
