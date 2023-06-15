class Character extends MovableObject{ // extends (dt. erweitert)
  x = 100;
  y = 50;
  width = 200;
  height = 250;
  speed = 50; // 5
  IMAGES_WALKING = [
    '../assets/img/1.Sharkie/3.Swim/1.png',
    '../assets/img/1.Sharkie/3.Swim/2.png',
    '../assets/img/1.Sharkie/3.Swim/3.png',
    '../assets/img/1.Sharkie/3.Swim/4.png',
    '../assets/img/1.Sharkie/3.Swim/5.png',
    '../assets/img/1.Sharkie/3.Swim/6.png',
  ];
  IMAGES_DEAD = [
    '../assets/img/1.Sharkie/6.dead/1.Poisoned/1.png',
    '../assets/img/1.Sharkie/6.dead/1.Poisoned/2.png',
    '../assets/img/1.Sharkie/6.dead/1.Poisoned/3.png',
    '../assets/img/1.Sharkie/6.dead/1.Poisoned/4.png',
    '../assets/img/1.Sharkie/6.dead/1.Poisoned/5.png',
    '../assets/img/1.Sharkie/6.dead/1.Poisoned/6.png',
    '../assets/img/1.Sharkie/6.dead/1.Poisoned/7.png',
    '../assets/img/1.Sharkie/6.dead/1.Poisoned/8.png',
    '../assets/img/1.Sharkie/6.dead/1.Poisoned/9.png',
    '../assets/img/1.Sharkie/6.dead/1.Poisoned/10.png',
    '../assets/img/1.Sharkie/6.dead/1.Poisoned/11.png',
    '../assets/img/1.Sharkie/6.dead/1.Poisoned/12.png',
  ];
  IMAGES_HURT = [
    '../assets/img/1.Sharkie/5.Hurt/1.Poisoned/1.png',
    '../assets/img/1.Sharkie/5.Hurt/1.Poisoned/2.png',
    '../assets/img/1.Sharkie/5.Hurt/1.Poisoned/3.png',
    '../assets/img/1.Sharkie/5.Hurt/1.Poisoned/4.png',
  ];
  world;
  swim_sound = new Audio('../assets/audio/swim.mp3');

  /** Only Methods need super() before.*/
  constructor(){
    super().loadImg('../assets/img/1.Sharkie/3.Swim/1.png'); // super() calls the extends MovableObject with the function loadImg()
    this.loadImgs(this.IMAGES_WALKING);
    this.loadImgs(this.IMAGES_DEAD);
    this.loadImgs(this.IMAGES_HURT);
    this.animate();
  }

  animate(){
    this.swim_sound.pause();
    /** moving */
    setInterval(() => {
      if(this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x){
          this.moveRight();
          this.swim_sound.play();
        };
      if(this.world.keyboard.LEFT && this.x > 0){
        this.moveLeft();
        this.reflectObjects = true; 
        this.swim_sound.play();
      };
      if(this.world.keyboard.UP){
        this.moveUp();
        this.swim_sound.play();
      };
      if(this.world.keyboard.DOWN){
        this.moveDown();
        this.swim_sound.play();
      };

      this.world.camera_x = -this.x + 100; // camera position on charakter
    },1000 / 60);

    /** Walk animation */
    setInterval(() =>{

      if (this.isDead()) {
        this.playAnimation(this.IMAGES_DEAD)
      }else if(this.isHurt()){
        this.playAnimation(this.IMAGES_HURT)
      }else if(
        this.world.keyboard.RIGHT ||  
        this.world.keyboard.LEFT ||
        this.world.keyboard.UP ||
        this.world.keyboard.down
        ){
          this.playAnimation(this.IMAGES_WALKING)
      }
        
    }, 100);
  }

  jump(){

  }
}