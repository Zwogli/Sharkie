class BarrierRockHorizontal extends MovableObject{
  img;
  rotate;

  constructor(imgPath, x, y,width, height, rotate){
    super().loadImg(imgPath);
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.rotate = rotate;
  }

}