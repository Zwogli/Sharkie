class MovableObject{
  img;
  imgCache = [];
  currentImg = 0;
  width = 100;
  height = 100;
  x = 100;
  y = 100;
  speed = 0.15;

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

  moveRight(param){
    console.log('moving right');
  }

  moveLeft(){
    setInterval(() => {
      this.x -= this.speed;
    }, 1000 / 60);  // 60FPS  
  }

  moveUp(){
    setInterval(() => {
      this.y += this.speed;
    }, 1000 / 60);  // 60FPS  
  }
}