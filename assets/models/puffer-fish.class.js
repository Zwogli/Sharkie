class PufferFish extends MovableObject{ // extends (dt. erweitert)

  constructor(){
    super().loadImg('../assets/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png'); // super() calls the extends MovableObject with the function loadImg()
    this.x = 400 + Math.random() * 500; // Math.random() generates a number beetwen 0 - 1, minMax x-axis = 200 - 700
    this.y = 0 + Math.random() * (480 - this.height);
    this.width = 80;
    this.height = 65;
  }

}