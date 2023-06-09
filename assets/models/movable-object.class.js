class MovableObject{
  img;
  width = 100;
  height = 100;
  x = 100;
  y = 100;

  /**
   * load model img
   * @param {string} path - ../assets/img/....
   */
  loadImg(path){
    this.img = new Image() // this.img = document.getElementById('image') <img id="image" src="">
    this.img.src = path
  }

  moveRight(param){
    console.log('moving right');
  }

  moveLeft(){

  }
}