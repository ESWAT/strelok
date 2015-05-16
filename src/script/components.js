// components.js

var Position = CES.Component.extend({
    name: 'position',
    init: function (x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
});

var Destination = CES.Component.extend({
    name: 'destination',
    init: function (x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
})

var Rotation = CES.Component.extend({
    name: 'rotation',
    init: function (x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
});

var Appearance = CES.Component.extend({
    name: 'appearance',
    init: function (mesh) {
        this.mesh = mesh;
    }
});

var Light = CES.Component.extend({
    name: 'light',
    init: function(light) {
        this.light = light;
    }
});

var Player = CES.Component.extend({
    name: 'player',
    init: function (camera) {
        this.camera = camera;
    }
})
