// systems.js

var InputSystem = CES.System.extend({
    update: function (dt) {
        var playerPos = pawn.getComponent('position');
        var playerCam = pawn.getComponent('player').camera;


        if (pawn.hasComponent('destination')) {
            var playerDest = pawn.getComponent('destination');
            if (playerPos.z < playerDest.z) {
                playerPos.z += 1 * dt;
                playerCam.position.z = playerPos.z;
            }
            else {
                pawn.removeComponent('destination');
            }
        }

        if (keyboard.pressed("w") && pawn.hasComponent('destination') === false) {
            pawn.addComponent(new Destination(0, 0, playerPos.z + 1));
            playerPos.z += 1 * dt;
            playerCam.position.z = playerPos.z;
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
        renderer.render( scene, pawnCamera );
    }
});