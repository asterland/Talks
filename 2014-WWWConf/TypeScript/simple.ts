class Animal {
    constructor(public name: string) { }
    move(meters: number) {
        console.log(this.name + " moved " + meters + "m.");
    }
}

class Snake extends Animal {
    constructor(name: string) { super(name); }
    move() {
        console.log("Slithering...");
        super.move(5);
    }
}

class Horse extends Animal {
    constructor(name: string) { super(name); }
    move() {
        console.log("Galloping...");
        super.move(45);
    }
}


(function () {
    document.addEventListener("DOMContentLoaded", function (){
        var hiFromTs = document.getElementById("hiFromTs");
        hiFromTs.addEventListener("click", function(){
            var sam = new Snake("Sammy the Python");
            var tom: Animal = new Horse("Tommy the Palomino");

            sam.move();
            tom.move(34);
        });
    });            
})();