class Hud extends DrawableObject{
  width = 150;
  height = 40;

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
