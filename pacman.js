import { PacManState } from "./enum";
import Location from "./location";

export default class PacManFactory {
    constructor() {
        // singleton design pattern
        if(this._instance) {
            return this._instance;
        }
        this._instance = this;
    }

    getPacMan = (type) => {
        if(type === PacManState.REGULAR) {
            return new RegularPacMan();
        } else if(type === PacManState.SUPER_CHARGED) {
            return new SuperPacMan();
        }
    }
}

class PacMan {
    constructor() {
        this.location = new Location(0,0);
        this.color = undefined;
    }

    setLocation = (location) => {
        this.location = location;
    }

    getLocation = () => {
        return this.location;
    }

    move = (direction) => {
        this.location.move(direction);
    }
}

class RegularPacMan extends PacMan {
    constructor() {
        this.color = 'yellow';
    }
}

class SuperPacMan extends PacMan {
    constructor() {
        this.color = 'bright green';
    }
}