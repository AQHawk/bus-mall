'use strict';

//Global Variables
Busmall.all = [];
Busmall.allImages = [];
// Busmall.theContainer = document.getElementById('imageContainer');

//Constructor
function Busmall(name, filepath, votes, views){
  this.name = name;
  this.filepath = filepath;
  this.votes = votes;
  this.views = views;
  Busmall.allImages.push(this);
}

//Instances
new Busmall ('Bag', 'img/bag.jpg');
new Busmall ('Banana', 'img/banana.jpg');
new Busmall ('Bathroom', 'img/bathroom.jpg');
new Busmall ('Boots', 'img/boots.jpg');
new Busmall ('Breakfast', 'img/breakfast.jpg');
new Busmall ('Bubblegum', 'img/bubblegum.jpg');
new Busmall ('Chair', 'img/chair.jpg');
new Busmall ('Cthulhu', 'img/cthulhu.jpg');
new Busmall ('Dog Duck', 'img/dog-duck.jpg');
new Busmall ('Dragon', 'img/dragon.jpg');
new Busmall ('Pen', 'img/pen.jpg');
new Busmall ('Pet Sweep', 'img/pet-sweep.jpg');
new Busmall ('Scissors', 'img/scissors.jpg');
new Busmall ('Shark', 'img/shark.jpg');
new Busmall ('Sweep', 'img/sweep.png');
new Busmall ('Tauntaun', 'img/tauntaun.jpg');
new Busmall ('Unicorn', 'img/unicorn.jpg');
new Busmall ('USB', 'img/usb.gif');
new Busmall ('Water Can', 'img/water-can.jpg');
new Busmall ('Wine Glass', 'img/wine-glass.jpg');

var imgEl = document.getElementById('displayImage');

imgEl.addEventListener('click', randomImage);


function randomImage(){
  var randomIndex = Math.floor(Math.random() * Busmall.allImages.length);
  imgEl.src = Busmall.allImages[randomIndex].filepath;
}

randomImage();
