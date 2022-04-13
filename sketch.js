//Creating animations

//animations like p5 images should be stored in variables
//in order to be displayed during the draw cycle
var cake;

//it's advisable (but not necessary) to load the images in the preload function
//of your sketch otherwise they may appear with a little delay
function preload() {

  //create an animation from a sequence of numbered images
  //pass the first and the last file name and it will try to find the ones in between
  cake = loadAnimation('cake1.png','cake3.png','cake2.png','cake4.png','cake5.png','cake6.png','cake7.png','cake7.png');

}

function setup() {
  createCanvas(900, 900);
}

function draw() {
  background(255, 247, 189);

  //specify the animation instance and its x,y position
  //animation() will update the animation frame as well
  animation(cake, 450, 450);
}
