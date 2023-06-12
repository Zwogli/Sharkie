class PufferFish extends MovableObject{ // extends (dt. erweitert)
  width = 80;
  height = 65;
  IMAGES_WALKING = [
    '../assets/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png',
    '../assets/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim2.png',
    '../assets/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim3.png',
    '../assets/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim4.png',
    '../assets/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim5.png',
  ];

  constructor(){
    super().loadImg('../assets/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png'); // super() calls the extends MovableObject with the function loadImg()
    this.loadImgs(this.IMAGES_WALKING);

    this.x = 400 + Math.random() * 500; // Math.random() generates a number beetwen 0 - 1, minMax x-axis = 200 - 700
    this.y = 0 + Math.random() * (480 - this.height);
    this.speed = 0.15 + Math.random() * 0.5;

    this.animate();
  }

  animate(){
    this.moveUp();
    /** Swim animation
     * 
     */
    setInterval(() =>{
      let i = this.currentImg % this.IMAGES_WALKING.length; // let i = 0 % 5; % (modulo) = mathematical rest
      // (IMAGES_WALKING.lenght = 5) i = 0,1,2,3,4, 0,1,2,3,4, .... 
      let path = this.IMAGES_WALKING[i];
      this.img = this.imgCache[path];
      this.currentImg++;
    }, 80);
  }
}