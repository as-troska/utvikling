/* I denne leksjonen skal vi se på tre ting

1) Moduler, eksport og import
2) Dokumentasjon av funksjoner
3) Stringmetoder

*/

const funksjoner = require("./leksjon2moduler.js") // Her importerer jeg exportene fra filen leksjon2moduler.js. Disse blir liggende som metoder i et objekt som heter funksjoner.

console.log(funksjoner.storForbokstav("store Moskusokser og andre buskevekster")) // Et eksempel på at jeg bruker den importerte funksjonen. Legg merke til at jeg skriver funksjoner.funksjonsnavn.

/*

1) Les denne siden: https://www.w3schools.com/js/js_string_methods.asp
2) Gjør disse oppgavene: https://www.w3schools.com/js/exercise_js.asp?filename=exercise_js_string_methods1
3) Utvid funksjonen i leksjon2moduler, slik at den ikke gjør om "of", "for", "the" og "a" til ord med stor forbokstav.
4) Skriv en funksjon som tar en lengre tekst, og gjør om alle tegn til små bokstaver. Dokumenter funksjonen din med jsdoc, og eksporter den som modul.

*/