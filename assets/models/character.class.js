class Character extends MovableObject{ // extends (dt. erweitert)
  x = 100;
  y = 50;
  width = 200;
  height = 250;
  speed = 5;
  IMAGES_WALKING = [
    '../assets/img/1.Sharkie/3.Swim/1.png',
    '../assets/img/1.Sharkie/3.Swim/2.png',
    '../assets/img/1.Sharkie/3.Swim/3.png',
    '../assets/img/1.Sharkie/3.Swim/4.png',
    '../assets/img/1.Sharkie/3.Swim/5.png',
    '../assets/img/1.Sharkie/3.Swim/6.png',
  ];
  world;

  /** Only Methods need super() before.*/
  constructor(){
    super().loadImg('../assets/img/1.Sharkie/3.Swim/1.png'); // super() calls the extends MovableObject with the function loadImg()
    this.loadImgs(this.IMAGES_WALKING);
    this.animate();
  }

  animate(){
    /** moving */
    setInterval(() => {
      if(this.world.keyboard.RIGHT){
          this.x += this.speed;
          this.reflectObjects = false;
        };
      if(this.world.keyboard.LEFT){
        this.x -= this.speed;
        this.reflectObjects = true;
      };
      if(this.world.keyboard.UP){
        this.y -= this.speed;
      };
      if(this.world.keyboard.DOWN){
        this.y += this.speed;
      };
      this.world.camera_x = -this.x;
    },1000 / 60);

    /** Walk animation */
    setInterval(() =>{
      if(this.world.keyboard.RIGHT ||  
        this.world.keyboard.LEFT ||
        this.world.keyboard.UP ||
        this.world.keyboard.down
        ){
        let i = this.currentImg % this.IMAGES_WALKING.length; // let i = 0 % 6; % (modulo) = mathematical rest
        // (IMAGES_WALKING.lenght = 6) i = 0,1,2,3,4,5, 0,1,2,3,4,5, .... 
        let path = this.IMAGES_WALKING[i];
        this.img = this.imgCache[path];
        this.currentImg++;
      }
    }, 100);
  }

  jump(){

  }
}