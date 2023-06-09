class World{
  // Variable doesn´t need let or const in class
  ctx; // context (dt. Zusammenhang)
  canvas;
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

  constructor(canvas){
    this.ctx = canvas.getContext('2d');
    this.canvas = canvas; // stores the param in the variable
    this.draw();
  }

  draw(){
    /**
     * clear canvas
     */
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    /** 
     * Fill canvas with objects
     * addObjectToMap() => (forEach) render array 
     */
    this.addObjectToMap(this.backgroundObjects);
    this.addObjectToMap(this.bgLights);
    this.addObjectToMap(this.enemies);
    // addToMap() => render single object
    this.addToMap(this.character);
    
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
    this.ctx.drawImage(movableObject.img, movableObject.x, movableObject.y, movableObject.width, movableObject.height);
  }
}