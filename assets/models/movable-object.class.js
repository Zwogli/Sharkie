class MovableObject{
  img;
  imgCache = [];
  currentImg = 0;
  width = 100;
  height = 100;
  x = 100;
  y = 100;
  speed = 0.15;
  reflectObjects = false;
  energy = 100;  

  /**
   * load model img
   * @param {string} path - ../assets/img/....
   */
  loadImg(path){
    this.img = new Image() // this.img = document.getElementById('image') <img id="image" src="">
    this.img.src = path
  }

  /**
   * 
   * @param {Array} arr - ['img/image1.png', 'img/image2.png', ...]
   */
  loadImgs(arr){
    arr.forEach(path => {
      let img = new Image();
      img.src = path;
      this.imgCache[path] = img;
    });
  }

  draw(ctx){
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }

  drawFrame(ctx){
    // select Oject to draw frame
    if (this instanceof Character || this instanceof PufferFish) {
      ctx.beginPath();
      ctx.lineWidth = '5';
      ctx.strokeStyle = 'blue';
      ctx.rect(this.x, this.y, this.width, this.height);
      ctx.stroke();
    }
  }

  isColliding (obj) {
    return  (this.x + this.width) >= obj.x && this.x <= (obj.x + obj.width) && 
            (this.y + this.height) >= obj.y && // orig. (this.y + this.offsetY + this.height) >= obj.y &&
            (this.y) <= (obj.y + obj.height) // orig. (this.y + this.offsetY) <= (obj.y + obj.height) &&
            //obj.onCollisionCourse; // Optional: hiermit könnten wir schauen, ob ein Objekt sich in die richtige Richtung bewegt. Nur dann kollidieren wir. Nützlich bei Gegenständen, auf denen man stehen kann.
  
  }

  hit(){
    this.energy -= 25;
    if (this.energy < 0) {
      this.energy = 0;
    }
    console.log('colliding', this.energy);
  }

  isDead(){
    return this.energy == 0;
  }

  moveRight(){
    this.x += this.speed;
    this.reflectObjects = false;
  }

  moveLeft(){
    this.x -= this.speed;
  }

  moveUp(){
    this.y -= this.speed;
  }

  moveDown(){
    this.y += this.speed;
  }

  playAnimation(imgs){
    let i = this.currentImg % this.IMAGES_WALKING.length; // let i = 0 % 6; % (modulo) = mathematical rest
    // (IMAGES_WALKING.lenght = 6) i = 0,1,2,3,4,5, 0,1,2,3,4,5, .... 
    let path = imgs[i];
    this.img = this.imgCache[path];
    this.currentImg++;
  }
}