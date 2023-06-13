class World{
  // Variable doesn´t need let or const in class
  ctx; // context (dt. Zusammenhang)
  canvas;
  keyboard;
  character = new Character();
  enemies = [
    new PufferFish(),
    new PufferFish(),
    new PufferFish(),
  ];
  bgLights = [
    new BgLight(),
  ];
  backgroundObjects = [
    new BackgroundObject('../assets/img/3. Background/Legacy/Layers/5. Water/L1.png', 0),
    new BackgroundObject('../assets/img/3. Background/Legacy/Layers/3.Fondo 1/D3.png', 0),
    new BackgroundObject('../assets/img/3. Background/Legacy/Layers/4.Fondo 2/L3.png', 0),
    new BackgroundObject('../assets/img/3. Background/Legacy/Layers/2. Floor/L3.png', 0)
  ];
  camera_x = 0;

  constructor(canvas, keyboard){
    this.ctx = canvas.getContext('2d');
    this.canvas = canvas; // stores the param in the variable
    this.keyboard = keyboard;
    this.draw();
    this.setWorld();
  }

  draw(){
    /** clear canvas*/
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.ctx.translate(this.camera_x, 0); // translate (dt. umsetzen)

    /** 
     * Fill canvas with objects
     * addObjectToMap() => (forEach) render array 
     */
    this.addObjectToMap(this.backgroundObjects);
    this.addObjectToMap(this.bgLights);
    this.addObjectToMap(this.enemies);
    // addToMap() => render single object
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
      this.ctx.save(); // save context settings
      this.ctx.translate(movableObject.width, 0); // change img methode
      this.ctx.scale(-1, 1); // scale( x, y), rotate x-axis
      movableObject.x = movableObject.x * -1;
    }
    this.ctx.drawImage(movableObject.img, movableObject.x, movableObject.y, movableObject.width, movableObject.height);
    // if change ctx reflect, undone reflection
    if (movableObject.reflectObjects) {
      this.ctx.restore();
      movableObject.x = movableObject.x * -1;
    };
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
}