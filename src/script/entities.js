// entities.js

var pawn = new CES.Entity();
pawn.addComponent(new Position(0, 0, 0));
pawn.addComponent(new Player(pawnCamera));

var ceiling = new CES.Entity();
ceiling.addComponent(new Position(0, 1, 4));
ceiling.addComponent(new Rotation(90*(Math.PI/180), 0, 0));
// ceiling.addComponent(new Appearance(new THREE.Mesh(
//   new THREE.PlaneGeometry( 2, 8, 0, 8 ),
//   new THREE.MeshBasicMaterial( { color: 0xff0000, wireframe: true } )
// )));

var floor = new CES.Entity();
floor.addComponent(new Position(0, -1, 4));
floor.addComponent(new Rotation(90*(Math.PI/180), 0, 0));
floor.addComponent(new Appearance(new THREE.Mesh(
  new THREE.PlaneGeometry( 2, 8, 0, 8 ),
  new THREE.MeshBasicMaterial( { color: 0x00ff00, wireframe: true } )
)));

var leftWall = new CES.Entity();
leftWall.addComponent(new Position(1, 0, 4));
leftWall.addComponent(new Rotation(0, 90*(Math.PI/180), 90*(Math.PI/180)));
// leftWall.addComponent(new Appearance(new THREE.Mesh(
//   new THREE.PlaneGeometry( 2, 8, 0, 8 ),
//   new THREE.MeshBasicMaterial( { color: 0x0000ff, wireframe: true } )
// )));

var rightWall = new CES.Entity();
rightWall.addComponent(new Position(-1, 0, 4));
rightWall.addComponent(new Rotation(0, 90*(Math.PI/180), 90*(Math.PI/180)));
// rightWall.addComponent(new Appearance(new THREE.Mesh(
//   new THREE.PlaneGeometry( 2, 8, 0, 8 ),
//   new THREE.MeshBasicMaterial( { color: 0xffff00, wireframe: true } )
// )));


var endWall = new CES.Entity();;

function assetsLoaded (geometry) {
  corridorMesh = new THREE.Mesh(
    geometry,
    new THREE.MeshBasicMaterial( { color: 0xffffff, wireframe: true } )
  )
  endWall.addComponent(new Position(0, 0, 1));
  endWall.addComponent(new Rotation(0, 0, 0));
  endWall.addComponent(new Appearance(new THREE.Mesh(
    geometry,
    new THREE.MeshBasicMaterial( { color: 0xffffff, wireframe: true } )
  )));
}