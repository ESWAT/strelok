// setup.js

// Frames
var now,
    dt = 0,
    last = window.performance.now(),
    step = 1/60;

// RenderSystem

var scene, camera, renderer, loader;

scene = new THREE.Scene();

renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );

document.body.appendChild( renderer.domElement );

loader = new THREE.JSONLoader();
loader.load('assets/corridor.js', assetsLoaded);

var keyboard = new THREEx.KeyboardState()