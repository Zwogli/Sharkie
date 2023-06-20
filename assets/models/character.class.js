class Character extends MovableObject{ // extends (dt. erweitert)
  IMAGES_WALKING = [
    './assets/img/1.Sharkie/3.Swim/1.png',
    './assets/img/1.Sharkie/3.Swim/2.png',
    './assets/img/1.Sharkie/3.Swim/3.png',
    './assets/img/1.Sharkie/3.Swim/4.png',
    './assets/img/1.Sharkie/3.Swim/5.png',
    './assets/img/1.Sharkie/3.Swim/6.png',
  ];
  IMAGES_DEAD = [
    './assets/img/1.Sharkie/6.dead/1.Poisoned/1.png',
    './assets/img/1.Sharkie/6.dead/1.Poisoned/2.png',
    './assets/img/1.Sharkie/6.dead/1.Poisoned/3.png',
    './assets/img/1.Sharkie/6.dead/1.Poisoned/4.png',
    './assets/img/1.Sharkie/6.dead/1.Poisoned/5.png',
    './assets/img/1.Sharkie/6.dead/1.Poisoned/6.png',
    './assets/img/1.Sharkie/6.dead/1.Poisoned/7.png',
    './assets/img/1.Sharkie/6.dead/1.Poisoned/8.png',
    './assets/img/1.Sharkie/6.dead/1.Poisoned/9.png',
    './assets/img/1.Sharkie/6.dead/1.Poisoned/10.png',
    './assets/img/1.Sharkie/6.dead/1.Poisoned/11.png',
    './assets/img/1.Sharkie/6.dead/1.Poisoned/12.png',
  ];
  IMAGES_HURT = [
    './assets/img/1.Sharkie/5.Hurt/1.Poisoned/1.png',
    './assets/img/1.Sharkie/5.Hurt/1.Poisoned/2.png',
    './assets/img/1.Sharkie/5.Hurt/1.Poisoned/3.png',
    './assets/img/1.Sharkie/5.Hurt/1.Poisoned/4.png',
  ];
  IMAGES_ATTACK = [
    './assets/img/1.Sharkie/4.Attack/Fin-slap/1.png',
    './assets/img/1.Sharkie/4.Attack/Fin-slap/2.png',
    './assets/img/1.Sharkie/4.Attack/Fin-slap/3.png',
    './assets/img/1.Sharkie/4.Attack/Fin-slap/4.png',
    './assets/img/1.Sharkie/4.Attack/Fin-slap/5.png',
    './assets/img/1.Sharkie/4.Attack/Fin-slap/6.png',
    './assets/img/1.Sharkie/4.Attack/Fin-slap/7.png',
    './assets/img/1.Sharkie/4.Attack/Fin-slap/8.png',
    './assets/img/1.Sharkie/4.Attack/Fin-slap/1.png',
  ];

  SOUND_SWIM = new Audio('./assets/audio/swim.mp3');
  
  x = 100;
  y = 50;
  width = 200;
  height = 250;
  offsetX = 35;
  offsetY = 115;
  offsetWidth = -70;
  offsetHeigth = -160;

  speed = 25; // 5
  attackFin = false;
  isDeath = false;
  world;

  /** Only Methods need super() before.*/
  constructor(){
    super().loadImg('./assets/img/1.Sharkie/3.Swim/1.png'); // super() calls the extends MovableObject with the function loadImg()
    this.loadAllImgs();
    this.animate();
  }

  loadAllImgs(){
    this.loadImgs(this.IMAGES_WALKING);
    this.loadImgs(this.IMAGES_DEAD);
    this.loadImgs(this.IMAGES_HURT);
    this.loadImgs(this.IMAGES_ATTACK);
  }

  animate(){
    this.SOUND_SWIM.pause();
    /** moving */
    setInterval(() => {
      if(!this.isDeath){  // stop moving
        if(this.limitLevelWidth()){
            this.moveRight();
            this.SOUND_SWIM.play();
          };
        if(this.limitLevelX()){
          this.moveLeft();
          this.reflectObjects = true;
          this.SOUND_SWIM.play();
        };
        if(this.limitLevelY()){
          this.moveUp();
          this.SOUND_SWIM.play();
        };
        if(this.limitLevelHeight()){
          this.moveDown();
          this.SOUND_SWIM.play();
        };
      }

      this.world.camera_x = -this.x + 100; // camera position on charakter
    },1000 / 60);

    /** All Movesets */
    setInterval(() =>{
      if (this.isDead()) {
        console.log(this.isDead())
        this.isDeath = true;
        this.playAnimation(this.IMAGES_DEAD);
      }else if(this.isHurt()){
        this.playAnimation(this.IMAGES_HURT);
      }else if(this.inputMoving()){
        this.playAnimation(this.IMAGES_WALKING);
      }else if(this.inputAttacking()){
          this.isAttacking();
      }
    }, 100);
  }

  isAttacking(){
    let attackingInterval = setInterval(() => {
      this.playAnimation(this.IMAGES_ATTACK);
      if(this.currentImg == this.IMAGES_ATTACK.length){
        clearInterval(attackingInterval);
        this.currentImg = 0;
      }
    }, 100);
    
    if(!this.attackFin){
      this.currentImg = 0;
      this.attackFin = true;
    }
    attackingInterval;

    
  }

  /**Level limit
   * 
   * @returns animate() - moving
   */
  limitLevelX(){
    return this.world.keyboard.LEFT && this.x > 0;
  }
  limitLevelWidth(){
    return this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x;
  }
  limitLevelY(){
    return this.world.keyboard.UP && this.y + this.offsetY > 15;
  }
  limitLevelHeight(){
    return this.world.keyboard.DOWN && this.y + this.height + this.offsetHeigth < this.world.level.level_end_y; 
  }

  /**Moveset conditions
   * 
   * @returns animate() - Movesets
   */
  inputMoving(){
    return this.world.keyboard.RIGHT || this.world.keyboard.LEFT || this.world.keyboard.UP || this.world.keyboard.down;
  }
  inputAttacking(){
    return this.world.keyboard.SPACE;
  }
}