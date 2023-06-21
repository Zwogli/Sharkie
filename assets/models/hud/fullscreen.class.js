// TODO
class Fullscreen extends DrawableObject {
IMAGE = './assets/img/icon/fullscreen.png';

constructor(){
  super();
  this.loadImg(this.IMAGE);
  this.x = 400;
  this.y = 10;
  this.width = 48;
  this.height = 48;
}
}