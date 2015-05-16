// world.js

var world = new CES.World();


world.addSystem(new InputSystem());
world.addSystem(new RenderSystem());

world.addEntity(pawn);

world.addEntity(corridor);