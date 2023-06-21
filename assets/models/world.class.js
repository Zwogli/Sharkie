class World{
  // Variable doesn´t need let or const in class
  ctx; // context (dt. Zusammenhang)
  canvas;
  keyboard;
  camera_x = 0;

  statusBar = new StatusBar();
  fullscreen = new Fullscreen();
  character = new Character();
  
  level = level1;

  constructor(canvas, keyboard){
    this.ctx = canvas.getContext('2d');
    this.canvas = canvas; // stores the param in the variable
    this.keyboard = keyboard;
    this.draw();
    this.setWorld();
    this.checkCollisions();
  }

  draw(){
    /** clear canvas*/
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.ctx.translate(this.camera_x, 0); // translate (dt. umsetzen)
    this.addObjectToMap(this.level.backgroundObjects);

    /** Fill canvas with objects
    * addObjectToMap() => (forEach) render array 
    */
    this.addObjectToMap(this.level.bgLights);
    this.addObjectToMap(this.level.enemies);
    
    this.ctx.translate(-this.camera_x, 0); // camera back
    //* space for fix objects
    this.addToMap(this.statusBar);
    this.ctx.translate(this.camera_x, 0); // camera forward
   
    // addToMap() => render single object
    this.addToMap(this.fullscreen);
    this.addToMap(this.character);

    this.ctx.translate(-this.camera_x, 0); // reset translate
    
    // keeps calling the draw function
    let self = this;
    requestAnimationFrame(function(){
      self.draw();
    });
  }

  /** Render object array
   * 
   * @param {object} objects - img, x, y, width, height
   */
  addObjectToMap(objects){
    objects.forEach(o => {
      this.addToMap(o);
    });
  }
  /** Draw Object
   * 
   * @param {object} movableObject - img, x, y, width, height
   */
  addToMap(movableObject){
    if (movableObject.reflectObjects) {
      this.flipImg(movableObject);
    }

    movableObject.draw(this.ctx);
    movableObject.drawFrame(this.ctx);

    // if change ctx reflect, undone reflection
    if (movableObject.reflectObjects) {
      this.flipImgBack(movableObject);
    };
  }

  flipImg(movableObject){
    this.ctx.save(); // save context settings
    this.ctx.translate(movableObject.width, 0); // change img methode
    this.ctx.scale(-1, 1); // scale( x, y), rotate x-axis
    movableObject.x = movableObject.x * -1;
  }

  flipImgBack(movableObject){
    this.ctx.restore();
    movableObject.x = movableObject.x * -1;
  }

  reflectImgX(){
    this.ctx.save(); // save context settings
    this.ctx.translate(movableObject.width, 0); // change img methode
    this.ctx.scale(-1, 1); // scale( x, y), rotate x-axis
    movableObject.x = movableObject.x * -1;
  }

  setWorld(){
    this.character.world = this;
  }

  checkCollisions(){
    setInterval(() => {
      this.level.enemies.forEach((enemy) => {
        if(this.character.isColliding(enemy) ){
          this.character.hit();
          this.statusBar.setPercentage(this.character.energy);
        }
      });
    }, 1000);
  }
}