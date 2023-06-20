// TODO
class Fullscreen extends DrawableObject {
IMAGE = './assets/img/icon/fullscreen.png';

constructor(){
  super();
  this.loadImg(this.IMAGE);
  this.x = 100;
  this.y = 300;
  this.width = 150;
  this.height = 150;
}
}