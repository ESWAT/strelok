// world.js

var world = new CES.World();


world.addSystem(new PawnSystem());
world.addSystem(new RenderSystem());

world.addEntity(pawn);

world.addEntity(corridor);