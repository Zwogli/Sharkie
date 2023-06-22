class BarrierTunnel extends MovableObject{
  y = -150;
  width = 1000;
  height = 750;

  constructor(imgPath, x){
    super().loadImg(imgPath);
    this.x = x;
  }
}