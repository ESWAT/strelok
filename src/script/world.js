// world.js

var world = new CES.World();


world.addSystem(new InputSystem());
world.addSystem(new RenderSystem());

world.addEntity(pawn);

world.addEntity(ceiling);
world.addEntity(floor);
world.addEntity(leftWall);
world.addEntity(rightWall);
world.addEntity(endWall);