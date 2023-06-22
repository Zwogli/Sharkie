class Level{
  enemies;
  bgLights;
  bgBarrier;
  backgroundObjects;
  level_end_x = 720 * 6;
  level_end_y = 360;

  constructor(lvlEnemies, lvlBgLights, lvlBarrier, lvlBackgroundObjects){ // lvlBgBarrier,
    this.enemies = lvlEnemies;
    this.bgLights = lvlBgLights;
    this.bgBarrier = lvlBarrier;
    this.backgroundObjects = lvlBackgroundObjects;
  }
}