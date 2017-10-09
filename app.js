'use strict';

//Global Variables
Busmall.all = [];
Busmall.lastDisplayed = [];
Busmall.totalClicks = 0;
Busmall.section = document.getElementById('imageContainer');

var votes = [];
var names = [];



//Constructor
function Busmall(name, filepath, altText){
  this.name = name;
  this.filepath = filepath;
  this.altText = altText;
  this.timesDisplayed = 0;
  this.votes = 0;
  Busmall.all.push(this);
}



if (localStorage.pixAll){
  Busmall.all = JSON.parse(localStorage.pixAll);
} else {
  new Busmall ('Bag', 'img/bag.jpg', 'bag');
  new Busmall ('Banana', 'img/banana.jpg', 'banana');
  new Busmall ('Bathroom', 'img/bathroom.jpg', 'bathroom');
  new Busmall ('Boots', 'img/boots.jpg', 'boots');
  new Busmall ('Breakfast', 'img/breakfast.jpg', 'breakfast');
  new Busmall ('Bubblegum', 'img/bubblegum.jpg', 'bubblegum');
  new Busmall ('Chair', 'img/chair.jpg', 'chair');
  new Busmall ('Cthulhu', 'img/cthulhu.jpg','cthulhu');
  new Busmall ('Dogduck', 'img/dog-duck.jpg', 'dogduck');
  new Busmall ('Dragon', 'img/dragon.jpg', 'dragon');
  new Busmall ('Pen', 'img/pen.jpg', 'pen');
  new Busmall ('Petsweep', 'img/pet-sweep.jpg', 'petsweep');
  new Busmall ('Scissors', 'img/scissors.jpg', 'scissors');
  new Busmall ('Shark', 'img/shark.jpg', 'shark');
  new Busmall ('Sweep', 'img/sweep.png', 'sweep');
  new Busmall ('Tauntaun', 'img/tauntaun.jpg', 'tauntaun');
  new Busmall ('Unicorn', 'img/unicorn.jpg','unicorn');
  new Busmall ('Usb', 'img/usb.gif', 'usb');
  new Busmall ('Watercan', 'img/water-can.jpg', 'watercan');
  new Busmall ('Wineglass', 'img/wine-glass.jpg', 'wineglass');
}

// Arrays to hold data for the chart

var imgLe = document.getElementById('leftImage');
var imgCe = document.getElementById('centerImage');
var imgRi = document.getElementById('rightImage');

function randomImage(){
  var leftImage = Math.floor(Math.random() * Busmall.all.length);
  var centerImage = Math.floor(Math.random() * Busmall.all.length);
  var rightImage = Math.floor(Math.random() * Busmall.all.length);

  while(Busmall.lastDisplayed.includes(leftImage) || Busmall.lastDisplayed.includes(centerImage) || Busmall.lastDisplayed.includes(rightImage) || leftImage === centerImage || centerImage === rightImage || leftImage === rightImage){
    console.log('Duplicate caught and corrected');
    leftImage = Math.floor(Math.random() * Busmall.all.length);
    centerImage = Math.floor(Math.random() * Busmall.all.length);
    rightImage = Math.floor(Math.random() * Busmall.all.length);
  };

  imgLe.src = Busmall.all[leftImage].filepath;
  imgLe.alt = Busmall.all[leftImage].altText;

  imgCe.src = Busmall.all[centerImage].filepath;
  imgCe.alt = Busmall.all[centerImage].altText;

  imgRi.src = Busmall.all[rightImage].filepath;
  imgRi.alt = Busmall.all[rightImage].altText;

  Busmall.all[leftImage].timesDisplayed += 1;
  Busmall.all[centerImage].timesDisplayed += 1;
  Busmall.all[rightImage].timesDisplayed += 1;

  Busmall.lastDisplayed = [];
  Busmall.lastDisplayed.push(leftImage, centerImage, rightImage);
}

function updateChart() {
  for (var i = 0; i < Busmall.all.length; i++) {
    names[i] = Busmall.all[i].name;
    votes[i] = Busmall.all[i].votes;
  }
}

function tallyVote(thisPhoto) {
  for (var i = 0; i < Busmall.all.length; i++) {
    if (thisPhoto === Busmall.all[i].altText) {
      Busmall.all[i].votes++;
      console.log('Busmall.all.altText', Busmall.all[i].altText);
      updateChart();
    }
  }
}

// ++++++++++++++++++CHART+++++++++++++++++++++++++++

var data = {
  labels: names,
  datasets: [
    {
      label: '# of Votes',
      data: votes,
      backgroundColor: [
        'navy',
      ],
      hoverBackgroundColor:
        'navy',

    }]

};

function drawChart() {
  var ctx = document.getElementById('results-chart').getContext('2d');
  new Chart(ctx,{
    type: 'bar',
    data: data,
    options: {
      legend: {
        labels: {
          fontColor: 'navy',
          fontSize: 18
        }
      },
      responsive: true,
      maintainAspectRatio: true,
      animation: {
        duration: 1000,
        easing: 'easeOutBounce'
      }
    },
    scales: {
      yAxes: [{
        ticks: {
          max: 10,
          min: 0,
          stepSize: 1.0
        }
      }]
    }
  });
  // chartDrawn;
}

document.getElementById('imageContainer').addEventListener('click', function(event){
  if (event.target.id !== 'imageContainer') {
    tallyVote(event.target.id);
  };

  updateChart();
});

function handleClick(e) {
  if (event.target.id === 'imageContainer') {
    return alert('click an image please!');
  }

  Busmall.totalClicks += 1;

  for(var i = 0; i < Busmall.all.length; i++) {
    if(e.target.alt === Busmall.all[i].altText) {
      Busmall.all[i].votes += 1;
      updateChart();
      console.log(Busmall.all[i].votes, ' votes');
    }
  }

  if(Busmall.totalClicks > 24) {
    Busmall.section.removeEventListener('click', handleClick);
    document.getElementById('imageContainer').hidden = true;
    //display the results
    drawChart();
  }
  randomImage();
}

Busmall.section.addEventListener('click', handleClick);

randomImage();
