
'use strict';

Goat.allGoats = [];

function Goat(name, filepath) {
  this.name = name;
  this.filepath = filepath;
  Goat.allGoats.push(this);
}

new Goat ('Crusin Goat', 'img/cruisin.goat.jpg');
new Goat ('Sassy Goat', 'img/sassy.goat.jpg');
new Goat ('Crusin Gaot', 'img/cruisin.goat.jpg');
new Goat ('Crusin Gaot', 'img/cruisin.goat.jpg');
new Goat ('Crusin Gaot', 'img/cruisin.goat.jpg');

var imgEl = document.getElementById('goat-pic');

imgEl.addEventListener('click, randomGoat');

function randomGoat(){
  return randomIndex = Math.floor(Math.random() * Goat.allGoats.length);

  imgEl.src = Goat.allGoats[randomIndex].filepath;
}

randomGoat();

// name, path , votes, views
