class CoinBar extends Hud{
  IMAGES = [
    './assets/img/4. Marcadores/green/Coin/100_ copia 4.png',
    './assets/img/4. Marcadores/green/Coin/80_  copia 4.png',
    './assets/img/4. Marcadores/green/Coin/60_  copia 4.png',
    './assets/img/4. Marcadores/green/Coin/40_  copia 4.png',
    './assets/img/4. Marcadores/green/Coin/20_  copia 2.png',
    './assets/img/4. Marcadores/green/Coin/0_  copia 4.png',
  ];

  constructor(){
    super();
    this.loadImgs(this.IMAGES);
    this.x = 10;
    this.y = 30;
    // this.width = 150;
    // this.height = 40;
    this.setPercentage(100);
  }
}