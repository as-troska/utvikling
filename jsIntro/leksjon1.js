console.log("Hei, verd!");

var variabel = "Dette er en gammel type variabel";

let enNyVariabel = "Dette er en ny type variabel"; //Hovedsakling denne brukes.

const enKonstant = "Dette er en konstant, som ikke kan endres";

//enKonstant = "Nytt innhold"

variabel = "Denne kan man gi nytt 'innhold'";
variabel = 'Dette er også en "string" ';

let tallVariabel = 1234;
tallVariabel = 1234.50;

let liste = [1, 2, 3, 4];
liste = ["Tekst", 2, 434n, [1, 2, 3, 4]];

console.log(liste[3]);

let objekt = {
    fornavn: "Trond",
    etternavn: "Skauge"
};

console.log(objekt.fornavn);

let sant = true;
sant = false;

let etTall = 10;
let endaEtTall = 3;

let svar = etTall ^ endaEtTall;



console.log(svar);


if (svar === 9) {
    console.log("Vi gikk inn i denne kodeblokken")
} else if (svar === 3) {
    console.log("Nei, denne blokken")
} else {
    console.log("Standardsvaret")
}

function einFunksjon(fornavn, etternavn) {
    console.log("Hei", fornavn, etternavn)     
}

for (let teller = 0; teller < 10; teller++) {
    console.log(teller)
}

let teller = 1;
while (teller < 100) {
    console.log(teller)
    teller++
}



einFunksjon("Trond", "Skauge")