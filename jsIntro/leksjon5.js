let etObjekt = {
    type: "Spar",
    verdi: 10
}

const bil = {
    bilmerke: "Porsche",
    modell: "911",
    farge: "Svart",
    toppfart: 290,
    fart: 0
  }

console.log(bil.bilmerke + bil.modell)

class Biler {
    constructor(bilmerke, modell, farge, toppfart, fart) {
        this.bilmerke = bilmerke;
        this.modell = modell;
        this.farge = farge;
        this.toppfart = toppfart;
        this.fart = fart;
    }

    presenterBil() {
       console.log(this.bilmerke + " " + this.modell)
       console.log ("Toppfart: " + this.toppfart)
    }
}

let fiat = new Biler("Fiat", "500", "Gul", 140, 80);
let tesla = new Biler("Tesla", "Model X", "Rød", 261, 3);

let biler = [];
biler.push(new Biler("Toyota", "Camry", "Svart", 164, 0))
biler.push(new Biler("Fiat", "500", "Gul", 140, 80));
biler.push(new Biler("Tesla", "Model X", "Rød", 261, 3));


console.log(biler[2].bilmerke)

fiat.presenterBil()
tesla.presenterBil()