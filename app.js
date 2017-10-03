'use strict';

//Global Variables
Busmall.all = [];
// var filesNames = ['bag.jpg', 'banana.jpg', 'bathroom.jpg', 'boots.jpg', 'breakfast.jpg', 'bubblegum.jpg', 'chair.jpg', 'cthulhu.jpg', 'dog-duck.jpg', 'dragon.jpg', 'pen.jpg', 'pet-sweep.jpg', 'scissors.jpg', 'shark.jpg', 'sweep.png', 'tauntaun.jpg', 'unicorn.jpg', 'usb.gif', 'water-can.jpg', 'wine-glass.jpg'];
// var imageNames = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntauin', 'unicorn', 'usb', 'water-can', 'wine-glass'];
Busmall.theContainer = document.getElementById('imageContainer');

//Constructor
function Busmall(name, filepath, votes, views){
  this.name = name;
  this.filepath = filepath;
  this.votes = votes;
  this.views = views;
  Busmall.all.push(this);
}

//Instances
new Busmall ('bag', 'img/bag.jpg');
new Busmall ('banana', 'img/banana.jpg');
new Busmall ('bathroom', 'img/bathroom.jpg');
new Busmall ('boots', 'img/boots.jpg');
new Busmall ('breakfast', 'img/breakfast.jpg');
new Busmall ('bubblegum', 'img/bubblegum.jpg');
new Busmall ('chair', 'img/chair.jpg');
new Busmall ('cthulhu', 'img/cthulhu.jpg');
new Busmall ('dog-duck', 'img/dog-duck.jpg');
new Busmall ('dragon', 'img/dragon.jpg');
new Busmall ('pen', 'img/pen.jpg');
new Busmall ('pet-sweep', 'img/pet-sweep.jpg');
new Busmall ('scissors', 'img/scissors.jpg');
new Busmall ('shark', 'img/shark.jpg');
new Busmall ('sweep', 'img/sweep.png');
new Busmall ('tauntaun', 'img/tauntaun.jpg');
new Busmall ('unicorn', 'img/unicorn.jpg');
new Busmall ('usb', 'img/usb.gif');
new Busmall ('water-can', 'img/water-can.jpg');
new Busmall ('wine-glass', 'img/wine-glass.jpg');

var imgLe = document.getElementById('leftImage');
var imgCe = document.getElementById('centerImage');
var imgRi = document.getElementById('rightImage');

// EVENT.TARGET WILL BE MY FRIEND

// Busmall.randomIndex = function(){
//   Math.floor(Math.random() * Busmall.all.length);
// };

//IN PROGRESS -- NEED TO DIVIDE THE LOVE+++++++++++++++++++++++++
function randomImage(left, center, right){
  var randomIndex = Math.floor(Math.random() * Busmall.all.length);
  imgLe.src = Busmall.all[randomIndex].filepath;
  imgCe.src = Busmall.all[randomIndex].filepath;
  imgRi.src = Busmall.all[randomIndex].filepath;
}

function imageContainer(){
  randomImage();
  imgLe.addEventListener('click', randomImage);
  imgCe.addEventListener('click', randomImage);
  imgRi.addEventListener('click', randomImage);
}

imageContainer();

randomImage();
