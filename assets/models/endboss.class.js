class Endboss extends MovableObject{
  width = 400;
  height = 400;
  y = 0;
  IMAGES_WALKING = [
    '../assets/img/2.Enemy/3 Final Enemy/2.floating/1.png',
    '../assets/img/2.Enemy/3 Final Enemy/2.floating/2.png',
    '../assets/img/2.Enemy/3 Final Enemy/2.floating/3.png',
    '../assets/img/2.Enemy/3 Final Enemy/2.floating/4.png',
    '../assets/img/2.Enemy/3 Final Enemy/2.floating/5.png',
    '../assets/img/2.Enemy/3 Final Enemy/2.floating/6.png',
    '../assets/img/2.Enemy/3 Final Enemy/2.floating/7.png',
    '../assets/img/2.Enemy/3 Final Enemy/2.floating/8.png',
    '../assets/img/2.Enemy/3 Final Enemy/2.floating/9.png',
    '../assets/img/2.Enemy/3 Final Enemy/2.floating/10.png',
    '../assets/img/2.Enemy/3 Final Enemy/2.floating/11.png',
    '../assets/img/2.Enemy/3 Final Enemy/2.floating/12.png',
  ];

  constructor(){
    super().loadImg(this.IMAGES_WALKING[0]);
    this.loadImgs(this.IMAGES_WALKING);
    this.x = 720 * 6;
    this.animate();
  }

  animate(){
    setInterval(() =>{
      this.playAnimation(this.IMAGES_WALKING)
    }, 250);
  }
}