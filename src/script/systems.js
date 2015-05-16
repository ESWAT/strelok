// systems.js

var PawnSystem = CES.System.extend({
    addedToWorld: function(world) {
        var pawnCam = pawn.getComponent('player').camera;
        pawnCam.rotation.y = Math.PI;
    },
    update: function (dt) {
        var pawnPos = pawn.getComponent('position');
        var pawnCam = pawn.getComponent('player').camera;


        if (pawn.hasComponent('destination')) {
            var pawnDest = pawn.getComponent('destination');
            if (pawnPos.z < pawnDest.z) {
                pawnPos.z += 1 * dt;
                pawnCam.position.z = pawnPos.z;
            }
            else {
                pawn.removeComponent('destination');
            }
        }

        if (keyboard.pressed("w") && pawn.hasComponent('destination') === false) {
            pawn.addComponent(new Destination(0, 0, pawnPos.z + 1));
            pawnPos.z += 1 * dt;
            pawnCam.position.z = pawnPos.z;
        }
    }
});

var RenderSystem = CES.System.extend({
    addedToWorld: function(world) {
        world.entityAdded('appearance').add(function(entity) {
            var position = entity.getComponent('position'),
                rotation = entity.getComponent('rotation');
                mesh = entity.getComponent('appearance').mesh;

            console.log(entity.getComponent('appearance'));
                
            if (typeof mesh === 'undefined') {
                return;
            }

            if (position) {
                mesh.position.x = position.x;
                mesh.position.y = position.y;
                mesh.position.z = position.z;
            }

            if (rotation) {
                mesh.rotation.x = rotation.x;
                mesh.rotation.y = rotation.y;
                mesh.rotation.z = rotation.z;
            }

            scene.add(mesh);
        })
    },
    update: function (dt) {
        renderer.render( scene, pawn.getComponent('player').camera );
    }
});