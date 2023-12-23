//prototype of a object!!

let obj = {
    1: "a",
    2: "b"
}

let animal = {
    eats: true
}

let rabbit = {
    jumps: true
}

rabbit.__proto__ = animal; //prototype is a object which can be used for inheriting other objects 
console.log(rabbit);
console.log(rabbit.eats);


class Animal {
    constructor(name) {
        this.name = name;
    }

    eats() {
        console.log("I am eating!!")
    }

    jumps() {
        console.log("I am jumping!!")
    }
}

let a = new Animal("Bunny");
a.eats();
console.log(a.name);

//INHERITANCE , Animal class is inherited in class lion!!
class Lion extends Animal {
    constructor(name) {
        super(name);
        console.log(`I am lion ${name}!!`)
    }

    //Method overRiding AND super keyword!!
    eats() {
        super.eats();
        console.log("Me kookoo eating!!")
    }

}


let b = new Lion("Kookoo");
console.log(b);
// a.eats();
b.eats();


