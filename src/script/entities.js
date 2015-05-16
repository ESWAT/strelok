// entities.js

var pawn = new CES.Entity();
pawn.addComponent(new Position(0, 0, 0));
pawn.addComponent(new Player(pawnCamera));

var corridor = new CES.Entity();
corridor.addComponent(new Position(0, 0, 1));
corridor.addComponent(new Rotation(0, 0, 0));

function assetsLoaded (geometry) {
  corridor.addComponent(new Appearance(new THREE.Mesh(
    geometry,
    new THREE.MeshBasicMaterial( { color: 0xff0000, wireframe: true } )
  )));
}