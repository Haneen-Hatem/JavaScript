/*
document.getElementById('demo').innerHTML = "Hello";
document.getElementById('demo').style.color = 'red';
document.getElementById('demo').style.backgroundColor = 'black';
*/

document.getElementById('first').style.textAlign = 'center';

// Date 
document.getElementById('demo').style.color = '#2c9279';
document.getElementById('demo').style.fontSize = '20px';
document.getElementById('btn').onclick = function () {
  document.getElementById('demo').innerHTML = Date();
}

// image
document.getElementById('turnon').onclick = function () {
  document.getElementById('img').src = 'assets/images/pic_bulbon.gif';
}

document.getElementById('turnoff').onclick = function () {
  document.getElementById('img').src = 'assets/images/pic_bulboff.gif';
}

