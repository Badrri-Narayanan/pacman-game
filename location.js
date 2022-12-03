import { Direction } from "./enum";

export default class Location {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    move = (direction) => {
        if(direction === Direction.UP) {
            this.y += 1;
        } else if(direction === Direction.DOWN) {
            this.y -= 1;
        } else if(direction === Direction.LEFT) {
            this.x -= 1;
        } else if(direction === Direction.RIGHT) {
            this.x += 1;
        }
    }
}