class StatusBar extends DrawableObject {
  IMAGES = [
    '../assets/img/4. Marcadores/orange/0_  copia.png',
    '../assets/img/4. Marcadores/orange/20_ copia 2.png',
    '../assets/img/4. Marcadores/orange/40_  copia.png',
    '../assets/img/4. Marcadores/orange/60_  copia.png',  // 3
    '../assets/img/4. Marcadores/orange/80_  copia.png',  // 4
    '../assets/img/4. Marcadores/orange/100_  copia.png', // 5
  ];
  percentage = 100;

  constructor(){
    super();
    this.loadImgs(this.IMAGES);
    this.x = 10;
    this.y = 0;
    this.width = 150;
    this.height = 50;
    this.setPercentage(100)
  }

  /** set percentage
   * @param {number} percentage - this.character.energy
   */
  setPercentage(percentage){
    this.percentage = percentage; // array number => 0 ... 5

    let path = this.IMAGES[this. resolveImageIndex()];
    this.img = this.imgCache[path];
  }

  /** check energie for statusbar img */
  resolveImageIndex(){
    if(this.percentage == 100){
      return 5;
    }else if(this.percentage > 80){
      return 4;
    }else if(this.percentage > 60){
      return 3;
    }else if(this.percentage > 40){
      return 2;
    }else if(this.percentage > 20){
      return 1;
    }else{
      return 0;
    }
  }
}