const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/shahada.png") {
    myImage.setAttribute("src", "images/shahada2.png");
  } else {
    myImage.setAttribute("src", "images/shahada.png");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Welcome to the Khilafa ' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Welcome to the Khilafa ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}
//eeeeeeeee
item.onmouseenter = function(){
this.classList.add('hovered');
}

item.onmouseleave = function(){
setTimeout(function(){
this.classList.remove('hovered');
}.bind(this),50)
}
item2.onmouseenter = function(){
this.classList.add('hovered');
}

item2.onmouseleave = function(){
setTimeout(function(){
this.classList.remove('hovered');
}.bind(this),50)
}
