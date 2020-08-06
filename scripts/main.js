var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
    var myName = prompt('Пожалуйста введите имя.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Здравствуйте, ' + myName;
  }
  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Здравствуйте, ' + storedName;
  }
    if(mySrc === 'images/image2.jpg') {
      myImage.setAttribute ('src','images/image2.jpg');
    } else {
      myImage.setAttribute ('src','images/image2.jpg');
    }
}

