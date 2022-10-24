//Lagre karakterer i en liste (Array)

let karakterer = [];

// Legg til den dårligste første prøven.

let norskProve = 2;

karakterer.push(norskProve)

// Hvor mange karakterer har vi i listen vår?

console.log("Du har lagret " + karakterer.length + " karakter i tabelllen din")

// legg til litt flere karakterer

karakterer.push(4)

console.log("Du har nå " + karakterer.push(4,5,6,1,2,4,5,1) + " i listen din") //Legg merke til at der forskjell på hva push gjør og hva den returnerer.

//Finn totalt antall karakterpoeng
let karakterPoeng = 0


for (let karakter of karakterer) {
    karakterPoeng = karakterPoeng + karakter
}
// Kan du finne noen flere måter å gjøre dette på? (Eks. reduce, mer verbose for-løkke, for-each osv.... Hint: Det vi prøver å gjøre er: find sum of array

// Finn gjennomsnittskarakter

let snitt = karakterPoeng / karakterer.length

console.log("Snittet ditt er: " + snitt)

//Sorterer tabellen fra lavest til høyest.
console.log(karakterer)
karakterer.sort()

console.log(karakterer)


//****************************************************************************** *//

// Mer avansert: Lage kortstokk

let kortType = ["Hjerter", "Ruter", "Kløver", "Spar"]

let verdier = ["Ess", 2, 3, 4, 5, 6, 7, 8, 9, 10, "Knekt", "Dame", "Konge"]

let kortstokk = [];

for (let i = 0; i < kortType.length; i++) {
    for (let j = 0; j < verdier.length; j++) {
        let kort = kortType[i] + " " + [verdier[j]]
        kortstokk.push(kort)
    }
}

console.log(kortstokk.length)
console.log(kortstokk)