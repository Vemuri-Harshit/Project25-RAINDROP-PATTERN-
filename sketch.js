

var raindrops = [];


function setup() {
var canvas =   createCanvas(1200,500);

for(var i = 0; i<500; i++){
  raindrops[i] = new Drop();
}

  
}

function draw() {
  background(215,239,244); 

  for(var i = 0;i<500;i++){
    raindrops[i].fall();
    raindrops[i].display();
  }

}