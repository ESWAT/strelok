function assetsLoaded(e){corridor.addComponent(new Appearance(new THREE.Mesh(e,new THREE.MeshBasicMaterial({color:16711680,wireframe:!0}))))}function update(e){world.update(e)}function frame(){for(now=window.performance.now(),dt+=Math.min(1,(now-last)/1e3);dt>step;)dt-=step,update(step);last=now,window.requestAnimationFrame(frame)}var now,dt=0,last=window.performance.now(),step=1/60,scene,camera,renderer,loader;scene=new THREE.Scene;var pawnCamera=new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,.1,1e3);pawnCamera.rotation.y=Math.PI,renderer=new THREE.WebGLRenderer,renderer.setSize(window.innerWidth,window.innerHeight),document.body.appendChild(renderer.domElement),loader=new THREE.JSONLoader,loader.load("../assets/corridor.js",assetsLoaded);var keyboard=new THREEx.KeyboardState,Position=CES.Component.extend({name:"position",init:function(e,n,t){this.x=e,this.y=n,this.z=t}}),Destination=CES.Component.extend({name:"destination",init:function(e,n,t){this.x=e,this.y=n,this.z=t}}),Rotation=CES.Component.extend({name:"rotation",init:function(e,n,t){this.x=e,this.y=n,this.z=t}}),Appearance=CES.Component.extend({name:"appearance",init:function(e){this.mesh=e}}),Player=CES.Component.extend({name:"player",init:function(e){this.camera=e}}),pawn=new CES.Entity;pawn.addComponent(new Position(0,0,0)),pawn.addComponent(new Player(pawnCamera));var corridor=new CES.Entity;corridor.addComponent(new Position(0,0,1)),corridor.addComponent(new Rotation(0,0,0));var InputSystem=CES.System.extend({update:function(e){var n=pawn.getComponent("position"),t=pawn.getComponent("player").camera;if(pawn.hasComponent("destination")){var o=pawn.getComponent("destination");n.z<o.z?(n.z+=1*e,t.position.z=n.z):pawn.removeComponent("destination")}keyboard.pressed("w")&&pawn.hasComponent("destination")===!1&&(pawn.addComponent(new Destination(0,0,n.z+1)),n.z+=1*e,t.position.z=n.z)}}),RenderSystem=CES.System.extend({addedToWorld:function(e){e.entityAdded("appearance").add(function(e){var n=e.getComponent("position"),t=e.getComponent("rotation");mesh=e.getComponent("appearance").mesh,console.log(e.getComponent("appearance")),"undefined"!=typeof mesh&&(n&&(mesh.position.x=n.x,mesh.position.y=n.y,mesh.position.z=n.z),t&&(mesh.rotation.x=t.x,mesh.rotation.y=t.y,mesh.rotation.z=t.z),scene.add(mesh))})},update:function(e){renderer.render(scene,pawnCamera)}}),world=new CES.World;world.addSystem(new InputSystem),world.addSystem(new RenderSystem),world.addEntity(pawn),world.addEntity(corridor),window.requestAnimationFrame(frame);