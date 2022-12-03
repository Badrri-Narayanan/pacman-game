import { GhostState } from "./enum";
import Location from "./location";

export class GhostFactory {
    constructor() {
        // singleton design pattern
        if(this._instance) {
            return this._instance;
        }
        this._instance = this;
    }

    getGhost = (type) => {
        if(type === GhostState.REGULAR) {
            return new RegularGhost();
        } else if(type === GhostState.ZOMBIE) {
            return new ZombieGhost();
        }
    }
}

class Ghost {
    constructor() {
        this.color = undefined;
        this.location = new Location(0, 0);
    }

    move = (direction) => {
        this.location.move(direction);
    }

    setLocation = (location) => {
        this.location = location;
    }

    getLocation = () => {
        return this.location;
    }
}

class RegularGhost extends Ghost {
    constructor() {
        this.color = 'red';
    }
}

class ZombieGhost extends Ghost {
    constructor() {
        this.color = 'gray';
    }
}