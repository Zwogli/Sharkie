let canvas,
    world,
    keyboard = new Keyboard();
    

function init(){
  canvas = document.getElementById('canvas');
  world = new World(canvas, keyboard);
}