class DrawableObject {
  x = 100;
  y = 100;
  width = 100;
  height = 100;
  offsetX = 0;
  offsetY = 0;
  offsetWidth = 0;
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
      try{
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
      }catch(e){
        console.warn('Error loading img', e);
        console.log('Could not find img', this.img.src);
      }
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