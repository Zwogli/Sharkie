let canvas,
    world,
    keyboard = new Keyboard();
    

function init(){
  canvas = document.getElementById('canvas');
  world = new World(canvas, keyboard);

  console.log('My character is', world.character);
}

window.addEventListener("keydown", (e) => {
  if(e.keyCode == 39 || 68){
  keyboard.RIGHT = true;
  }

  if(e.keyCode == 37 || 65){
    keyboard.LEFT = true;
    }

  if(e.keyCode == 38 || 87){
    keyboard.UP = true;
  }

  if(e.keyCode == 40 || 83){
    keyboard.DOWN = true;
  }
  if(e.keyCode == 32){
    keyboard.SPACE = true;
  }
  console.log(e.keyCode);
});

window.addEventListener("keyup", (e) => {
  if(e.keyCode == 39 || 68){
    keyboard.RIGHT = false;
    }
  
    if(e.keyCode == 37 || 65){
      keyboard.LEFT = false;
      }
  
    if(e.keyCode == 38 || 87){
      keyboard.UP = false;
    }
  
    if(e.keyCode == 40 || 83){
      keyboard.DOWN = false;
    }
    if(e.keyCode == 32){
      keyboard.SPACE = false;
    }
    console.log(e.keyCode);
});