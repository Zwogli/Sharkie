class Level{
  enemies;
  bgLights;
  backgroundObjects;
  level_end_x = 720 * 6;
  level_end_y = 360;

  constructor(lvlEnemies, lvlBgLights, lvlBackgroundObjects){
    this.enemies = lvlEnemies;
    this.bgLights = lvlBgLights;
    this.backgroundObjects = lvlBackgroundObjects;
  }
}