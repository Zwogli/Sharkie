class MovableObject extends DrawableObject{
  speed = 0.15;
  reflectObjects = false;
  energy = 100;
  lastHit = 0;

  isColliding (obj) {
    return  (this.x + this.offsetX + this.width + this.offsetWidth) >= obj.x && this.x <= (obj.x + obj.width) && 
            (this.y + this.offsetY + this.height +this.offsetHeigth) >= obj.y && // orig. (this.y + this.offsetY + this.height) >= obj.y &&
            (this.y + this.offsetY) <= (obj.y + obj.height) // orig. (this.y + this.offsetY) <= (obj.y + obj.height) &&
            //obj.onCollisionCourse; // Optional: hiermit könnten wir schauen, ob ein Objekt sich in die richtige Richtung bewegt. Nur dann kollidieren wir. Nützlich bei Gegenständen, auf denen man stehen kann.
  }

  hit(){
    this.energy -= 25;
    if (this.energy < 0) {
      this.energy = 0;
    }else{
      this.lastHit = new Date().getTime(); // time as number, since 01.01.1970
    }
  }

  isHurt(){
    let timepassed = new Date().getTime() - this.lastHit; // Difference in ms
    timepassed = timepassed / 1000; // difference in seconds
    return timepassed < 1; // returns true if hit in the last 5s
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
    let i = this.currentImg % imgs.length; // let i = 0 % 6; % (modulo) = mathematical rest
    // (IMAGES_WALKING.lenght = 6) i = 0,1,2,3,4,5, 0,1,2,3,4,5, .... 
    let path = imgs[i];
    this.img = this.imgCache[path];
    this.currentImg++;
  }
}