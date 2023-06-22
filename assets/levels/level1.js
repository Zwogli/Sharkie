/**Level structure
 * enemies, light, barrier, background
 */
const level1 = new Level(
  [
    new PufferFish(),
    new PufferFish(),
    new PufferFish(),
    new Endboss(),
  ],
  [
    new BgLight(),
  ],
  [//(imgPath, x, y, width, height, rotate)
    /** Cave on the left side */
    new BarrierTunnel('./assets/img/3. Background/Barrier/1.png', -750),
    new BarrierTunnel('./assets/img/3. Background/Barrier/1.png', -750 * 2.1),
    new BarrierRockHorizontal('./assets/img/3. Background/Barrier/2.png', -750 * 1.2, 275, 1000, 480),
    new BarrierRockVertical('./assets/img/3. Background/Barrier/3.png', -750 * 2.5, -10, 500, 800),
    /** Barrier on the way*/
    new BarrierRockHorizontal('./assets/img/3. Background/Barrier/2.png', 720 * 2.5, -200, 1000, 480, 90),
    new BarrierRockHorizontal('./assets/img/3. Background/Barrier/2.png', 720 * 3, 200, 1000, 480, 0),
    /** Boss cave */
    new BarrierRockVertical('./assets/img/3. Background/Barrier/3.png', 720 * 5, -600, 300, 800),
    new BarrierRockVertical('./assets/img/3. Background/Barrier/3.png', 720 * 5, 400, 300, 800),
    new BarrierRockVertical('./assets/img/3. Background/Barrier/3.png', 720 * 6.7, -100, 300, 800),
  ],
  [
    new BackgroundObject('./assets/img/3. Background/Layers/5. Water/L1.png', -720 * 3),
    new BackgroundObject('./assets/img/3. Background/Layers/3.Fondo 1/L2.png', -720 * 3),
    new BackgroundObject('./assets/img/3. Background/Layers/4.Fondo 2/L2.png', -720 * 3),
    new BackgroundObject('./assets/img/3. Background/Layers/2. Floor/L2.png', -720 * 3),

    new BackgroundObject('./assets/img/3. Background/Layers/5. Water/L.png', -720 * 2),
    new BackgroundObject('./assets/img/3. Background/Layers/3.Fondo 1/L1.png', -720 * 2),
    new BackgroundObject('./assets/img/3. Background/Layers/4.Fondo 2/L1.png', -720 * 2),
    new BackgroundObject('./assets/img/3. Background/Layers/2. Floor/L1.png', -720 * 2),

    new BackgroundObject('./assets/img/3. Background/Layers/5. Water/L1.png', -720),
    new BackgroundObject('./assets/img/3. Background/Layers/3.Fondo 1/L2.png', -720),
    new BackgroundObject('./assets/img/3. Background/Layers/4.Fondo 2/L2.png', -720),
    new BackgroundObject('./assets/img/3. Background/Layers/2. Floor/L2.png', -720),

    new BackgroundObject('./assets/img/3. Background/Layers/5. Water/L.png', 0),
    new BackgroundObject('./assets/img/3. Background/Layers/3.Fondo 1/L1.png', 0),
    new BackgroundObject('./assets/img/3. Background/Layers/4.Fondo 2/L1.png', 0),
    new BackgroundObject('./assets/img/3. Background/Layers/2. Floor/L1.png', 0),

    new BackgroundObject('./assets/img/3. Background/Layers/5. Water/L1.png', 720),
    new BackgroundObject('./assets/img/3. Background/Layers/3.Fondo 1/L2.png', 720),
    new BackgroundObject('./assets/img/3. Background/Layers/4.Fondo 2/L2.png', 720),
    new BackgroundObject('./assets/img/3. Background/Layers/2. Floor/L2.png', 720),

    new BackgroundObject('./assets/img/3. Background/Layers/5. Water/L.png', 720 * 2),
    new BackgroundObject('./assets/img/3. Background/Layers/3.Fondo 1/L1.png', 720 * 2),
    new BackgroundObject('./assets/img/3. Background/Layers/4.Fondo 2/L1.png', 720 * 2),
    new BackgroundObject('./assets/img/3. Background/Layers/2. Floor/L1.png', 720 * 2),
    
    new BackgroundObject('./assets/img/3. Background/Layers/5. Water/L1.png', 720 * 3),
    new BackgroundObject('./assets/img/3. Background/Layers/3.Fondo 1/L2.png', 720 * 3),
    new BackgroundObject('./assets/img/3. Background/Layers/4.Fondo 2/L2.png', 720 * 3),
    new BackgroundObject('./assets/img/3. Background/Layers/2. Floor/L2.png', 720 * 3),
    
    new BackgroundObject('./assets/img/3. Background/Layers/5. Water/L.png', 720 * 4),
    new BackgroundObject('./assets/img/3. Background/Layers/3.Fondo 1/L1.png', 720 * 4),
    new BackgroundObject('./assets/img/3. Background/Layers/4.Fondo 2/L1.png', 720 * 4),
    new BackgroundObject('./assets/img/3. Background/Layers/2. Floor/L1.png', 720 * 4),

    new BackgroundObject('./assets/img/3. Background/Layers/5. Water/L1.png', 720 * 5),
    new BackgroundObject('./assets/img/3. Background/Layers/3.Fondo 1/L2.png', 720 * 5),
    new BackgroundObject('./assets/img/3. Background/Layers/4.Fondo 2/L2.png', 720 * 5),
    new BackgroundObject('./assets/img/3. Background/Layers/2. Floor/L2.png', 720 * 5),

    new BackgroundObject('./assets/img/3. Background/Layers/5. Water/L.png', 720 * 6),
    new BackgroundObject('./assets/img/3. Background/Layers/3.Fondo 1/L1.png', 720 * 6),
    new BackgroundObject('./assets/img/3. Background/Layers/4.Fondo 2/L1.png', 720 * 6),
    new BackgroundObject('./assets/img/3. Background/Layers/2. Floor/L1.png', 720 * 6),
  ]
);
