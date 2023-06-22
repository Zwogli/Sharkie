class BarrierRockVertical extends MovableObject{

  constructor(imgPath, x, y,width, height){
    super().loadImg(imgPath);
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }
}