class Level{
  enemies;
  bgLights;
  backgroundObjects;
  level_end_x = 2200;

  constructor(lvlEnemies, lvlBgLights, lvlBackgroundObjects){
    this.enemies = lvlEnemies;
    this.bgLights = lvlBgLights;
    this.backgroundObjects = lvlBackgroundObjects;
  }
}