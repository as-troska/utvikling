/*
    Variabler og datatyper
    ********************** 
    (Dette er forresten en kommentar (som går over flere linjer))
*/

let tekstVariabel = "Dette er en variabel som holder på tekst"

let tallVariabel = 1 // Dette er en variabel som holder på tall

let listeVariabel = [1, 2, 3, 4, 5, 6] // Dette er en variabel som holder på ett array (Kan oversettes til liste)

let objektVariabel = {innhold: "objekt", muligInnhold: "Alt mulig"} // Dette er en variabel som holder på et objekt

// Legg merke til at alle linjene over starter med "let". Dette bruker vi når vi "deklarerer" en variabel, dvs oppretter en variabel første gang. Vi bruker ikke dette nøkkelordet neste gang vi refererer til variabelen. En variant av nøkkelordet er "var", men denne har litt annerledes "scope", noe vi kommer tilbake til senere. I eldre bøker er det ofte brukt "var" i stedet for "let"

console.log("Demonstrasjon av variabler")
console.log("--------------------------")
console.log(tekstVariabel)
console.log(tallVariabel)
console.log(listeVariabel)
console.log(objektVariabel)
console.log("") // En tom linje

// Linjene over skriver ut innholdet i variablene til konsollen.

console.log("Demonstrasjon av array og objekt")
console.log("--------------------------")
console.log(listeVariabel[1]) // Tallet i hakeparantesen viser til posisjon (index) i listen. Merk at en begynner å telle med null. Merk deg derfor hvilket tall utskriften viser. 
console.log(objektVariabel.muligInnhold) // Med "dotnotasjon" kan en hente ut egenskapene fra et objekt
