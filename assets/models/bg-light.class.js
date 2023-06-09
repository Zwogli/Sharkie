class BgLight extends MovableObject{
  y = 0;
  width = 1000;
  height = 400;

  constructor(){
    super().loadImg('../assets/img/3. Background/Layers/1. Light/COMPLETO.png'); // super() calls the extends MovableObject with the function loadImg()
    this.x = 0 + Math.random() * 500; // Math.random() generates a number beetwen 0 - 1
  }
}