// setup.js

// Frames
var now,
    dt = 0,
    last = window.performance.now(),
    step = 1/60;

// RenderSystem

var scene, camera, renderer, loader, corridorMesh;

scene = new THREE.Scene();

var pawnCamera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
pawnCamera.rotation.y = Math.PI;

renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );

document.body.appendChild( renderer.domElement );

loader = new THREE.JSONLoader();
loader.load('../assets/corridor.js', assetsLoaded);

var keyboard = new THREEx.KeyboardState()