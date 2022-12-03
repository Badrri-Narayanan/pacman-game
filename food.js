import { FoodState } from "./enum";
import Location from "./location";

export default class FoodRepository {
    constructor() {
        // singleton design pattern
        if(this._instance) {
            return this._instance;
        }
        this._instance = this;
    }

    getFood = (type) => {
        if(type === FoodState.REGULAR) {
            return new RegularFood();
        } else if (type === FoodState.SUPER) {
            return new SuperFood();
        }
    }
}

class Food {
    constructor() {
        this.isConsumed = false;
        this.color = undefined;
        this.location = new Location(0, 0);
    }

    setLocation = (location) => {
        this.location = location;
    }

    getLocation = () => {
        return this.location;
    }
}

class RegularFood extends Food{
    constructor() {
        this.color = 'yellow';
    }
}

class SuperFood extends Food {
    constructor() {
        this.color = 'green';
    }
}

