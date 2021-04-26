var platform1, platform2
var countDistanceX = 0
var gap = 60
function preload()
{}

function setup() {
  createCanvas(7346, 668);
  


for (var i=0; i<10;i++){
  platform1 = new Platform(countDistanceX);
  countDistanceX = countDistanceX+platform1.rw+ gap
  gap = random([10,50,70,80])
}

}

function draw() {   
  background('skyblue'); 
 drawSprites();
}

