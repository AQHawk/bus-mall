'use strict';

//Global Variables
Busmall.all = [];
Busmall.lastDisplayed = [];
Busmall.votes = [];
Busmall.names = [];
Busmall.totalClicks = 0;
Busmall.section = document.getElementById('imageContainer');
Busmall.resultsList = document.getElementById('results');

var barChart;
var chartDrawn = false;

// var filesNames = ['bag.jpg', 'banana.jpg', 'bathroom.jpg', 'boots.jpg', 'breakfast.jpg', 'bubblegum.jpg', 'chair.jpg', 'cthulhu.jpg', 'dog-duck.jpg', 'dragon.jpg', 'pen.jpg', 'pet-sweep.jpg', 'scissors.jpg', 'shark.jpg', 'sweep.png', 'tauntaun.jpg', 'unicorn.jpg', 'usb.gif', 'water-can.jpg', 'wine-glass.jpg'];
// var imageNames = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntauin', 'unicorn', 'usb', 'water-can', 'wine-glass'];

//Constructor
function Busmall(name, filepath, altText){
  this.name = name;
  this.filepath = filepath;
  this.altText = altText;
  this.timesDisplayed = 0;
  this.votes = 0;
  Busmall.all.push(this);
}

//Instances
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


function handleClick(e){
  if(e.target.id === 'imageContainer') {
    return alert('Please click on a picture');
  }


  Busmall.totalClicks += 1;

  for(var i = 0; i < Busmall.all.length; i++) {
    if(event.target.alt === Busmall.all[i].altText) {
      Busmall.all[i].votes += 1;
    }
  }

//WORK BELOW HERE++++++++++++++++++++++++++++++
  if(Busmall.totalClicks > 24){
    Busmall.section.removeEventListener('click', handleClick);
    showResults();
  }

  randomImage();
}


function showResults(){
  for(var i = 0; i < Busmall.all.length; i++){
    var leEl = document.createElement('li');
    leEl.textContent = Busmall.all[i].name + ' has ' + Busmall.all[i].votes + ' votes in ' + Busmall.all[i].timesDisplayed + ' times shown.';
    Busmall.resultsList.appendChild(leEl);
  }
}


//++++++++++++ Chart Below ++++++++++++++++

function updateChartArrays() {
  for (var i = 0; i < Busmall.all.length; i++) {
    names[i] = all[i].name;
    votes[i] = all[i].votes;
  }
}

function tallyVote(thisPhoto) {
  for (var i = 0; i < Busmall.all.length; i++) {
    if (thisPhoto === Busmall.all[i].altText) {
      Busmall.all[i].votes++;
      updateChartArrays();
    }
  }
}

var data = {
  labels: Busmall.names, // Do I need this to be Busmall.names???
  datasets: [
    {
      data: Busmall.votes, // Do I need this to be Busmall.votes???
      backgroundColor: [
        'navy',
      ],
      hoverBackgroundColor: [
        'darkgreen',
      ]
    }]
};

function drawChart() {
  var ctx = document.getElementById('results-chart').getContext('2d');
  barChart = new Chart(ctx,{
    type: 'bar',
    data: data,
    options: {
      legend: {
        labels: {
          fontColor: 'darkgreen',
          fontSize: 18
        }
      },
      responsive: false,
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
  chartDrawn = true;
}


if (showResults === true){
  document.getElementById('imageContainer').hidden = true;
  drawChart();
}



document.getElementById('results').addEventListener('click', function(){
  document.getElementById('results').hidden = true;
});


document.getElementById('imageContainer').addEventListener('click', function(event){
  if (event.target.id !== 'imageContainer') {
    tallyVote(event.target.id);
  };

  if (chartDrawn) {
    barChart.update();
  }
});




Busmall.section.addEventListener('click', handleClick);

randomImage();
