export default class InputHandler {
  constructor(entity, canvas) {
    this.canvas = canvas;

    let keys = {"space": false, "d": false, "w": false, "s": false, "a": false};
    
    document.addEventListener("keydown", (event) => {
      if (!entity.disabled) {
      keys[event.key] = true;
      
      switch (event.key) {
        // this is just for SHOOTING, not look direction
        case ' ':
            entity.shoot();
            break;
      }
    }
    });

    document.addEventListener("keyup", (event) => {

      if (!entity.dead) {
      keys[event.key] = false;

      switch (event.key) {
        // SPACE BAR:
        case ' ':
          if (entity.weapon == "flammen") {
            flammen.pause();
          }
          // flammen.pause();
          break;
      }
    }
    });
  }
}
// cxt