// TODO: while shooting straight, pressing d+w makes bullets shoot up instead of diagnal,
// yet, pressing w+d does make it diagnal.    --DONE. Simply had to move if statement to bottom of cases.
export default class InputHandler {
  constructor(entity, canvas) {
    this.canvas = canvas;

    let keys = {"space": false, "d": false, "w": false, "s": false, "a": false};
    
    document.addEventListener("keydown", (event) => {
      // TODO: try using if statements instead.

      // what this do? sets respective keys value to true. "key" is a built-in property of "event" lol
      keys[event.key] = true;
      
      switch (event.key) {
        // this is just for SHOOTING, not look direction
        case ' ':
            entity.shooting = true;
            break;
      }
    });

    document.addEventListener("keyup", (event) => {

      keys[event.key] = false;

      switch (event.key) {
        // SPACE BAR:
        case ' ':
          entity.shooting = false;
          break;
      }
    });
  }
}
// cxt