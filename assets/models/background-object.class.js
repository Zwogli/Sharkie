class BackgroundObject extends MovableObject{
  width = 1920;
  height = 480;

  constructor(imgPath, x){
    super().loadImg(imgPath);
    this.x = x;
    this.y = 480 - this.height; // 480 = canvas height
  }
}