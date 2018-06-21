class Rat {
    constructor(name) {
        if (typeof name == "string") {
            this.name = name;
        }
        else {
            throw TypeError("Name of your rat must be string/text");
        }
        this.unitedRats = [];
    }

    unite(member) {
        if (member instanceof Rat) {
            this.unitedRats.push(member);
        }
    }

    getRats() {
        return this.unitedRats;
    }

    toString() {

        if (this.unitedRats.length > 0) {

            console.log(this.name);
            
            for (let k in this.unitedRats) {
                console.log("##" + this.unitedRats[k].name);
            }

        }

        else {
            return this.name;
        }
    }
}

let madjunaRat = new Rat("Madjuna");
let hinkoRat = new Rat("Hinko");
let beckoRat = new Rat("Becko");
let ceckoRat = new Rat("Cecko");

madjunaRat.unite(hinkoRat);
madjunaRat.unite(beckoRat);
madjunaRat.unite(ceckoRat);

console.log(madjunaRat.toString());
