// game.js

function update(step) {
    world.update(step);
}

function frame() {
  now = window.performance.now();
  dt = dt + Math.min(1, (now - last) / 1000);

  while (dt > step) {
    dt = dt - step;
    update(step);
  }

  last = now;
  window.requestAnimationFrame(frame);
}

window.requestAnimationFrame(frame);
