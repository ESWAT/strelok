// world.js

var world = new CES.World();

world.addEntity(pawn);

world.addEntity(ceiling);
world.addEntity(floor);
world.addEntity(leftWall);
world.addEntity(rightWall);
world.addEntity(endWall);

world.addSystem(new InputSystem());
world.addSystem(new RenderSystem());
