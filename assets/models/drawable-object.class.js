class DrawableObject {
  x = 100;
  offsetX = 0;
  y = 100;
  offsetY = 0;
  width = 100;
  offsetWidth = 0;
  height = 100;
  offsetHeigth = 0;
  
  img;
  imgCache = [];
  currentImg = 0;

    /** load model img
   * @param {string} path - ../assets/img/....
   */
    loadImg(path){
      this.img = new Image() // this.img = document.getElementById('image') <img id="image" src="">
      this.img.src = path
    }

    /** load img array
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
        // define hit-box, rect()
        ctx.rect(this.x + this.offsetX, this.y + this.offsetY, 
          this.width + this.offsetWidth, this.height + this.offsetHeigth);
        ctx.stroke();
      }
    }
}