class User {
    constructor(name) {
        this.name = name;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        if (value.length < 4) {
            console.log("Name is too short , Plz input again !!")
            return;
        }
        this._name = value;

    }
}

let user = new User("Jhonny");
// user.name  = "";
user.name = "pratiksha";
console.log(user.name);