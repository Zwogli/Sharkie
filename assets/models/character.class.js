class Character extends MovableObject{ // extends (dt. erweitert)
  /**
  * Only Methods need super() before.
  */
  constructor(){
    super().loadImg('../assets/img/1.Sharkie/3.Swim/1.png'); // super() calls the extends MovableObject with the function loadImg()
    this.x = 100;
    this.y = 50;
    this.width = 200;
    this.height = 250;
  }

  jump(){

  }
}