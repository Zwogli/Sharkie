class PufferFish extends MovableObject{ // extends (dt. erweitert)
  width = 80;
  height = 65;
  swimDirection;
  IMAGES_WALKING = [
    './assets/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png',
    './assets/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim2.png',
    './assets/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim3.png',
    './assets/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim4.png',
    './assets/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim5.png',
  ];

  constructor(){
    super().loadImg('./assets/img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png'); // super() calls the extends MovableObject with the function loadImg()
    this.loadImgs(this.IMAGES_WALKING);

    this.x = 400 + Math.random() * (720 * 3); // Math.random() generates a number beetwen 0 - 1, minMax x-axis = 200 - 700
    this.y = 0 + Math.random() * (480 - this.height);
    this.speed = 0.15 + Math.random() * 0.5;

    this.animate();
  }

  animate(){
    setInterval(() => {
      if(this.swimDirection == 0){
        this.moveUp();
        if(this.y < 10){
          this.swimDirection = 1;
        }
      }else{
        this.moveDown();
        if(this.y + this.height > 480){
          this.swimDirection = 0;
        }
      }
    }, 1000 / 60);  // 60FPS  
    /** Swim animation*/
    setInterval(() =>{
      this.playAnimation(this.IMAGES_WALKING)
    }, 80);
  }
}