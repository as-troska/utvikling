/*

PROSSEDYREBLACKJACK UTEN NOE FUZZ

*/

const prompt = require("prompt-sync")({sigint: true}) 
// For å bruke denne pakken må en første kjøre npm install prompt-sync. Sigint biten er med for å la oss bruke ctrl+c for å stoppe programmet


/**
 * En funksjon for å generere en kortstokk
 * 
 * @returns {String[]} Returnerer et array med 52 kort sortert etter type
 */
function lagKortstokk() {
    let kortstokk = [];
    let typer = ["Kløver", "Hjerter", "Spar", "Ruter"];

    let verdier = ["Ess", 2, 3, 4, 5, 6, 7, 8, 9, 10, "Knekt", "Dame", "Konge"]
    
    for(let i = 0; i < typer.length; i++) {
        for (let j = 0; j < verdier.length; j++) {
            let type = typer[i];
            let verdi = verdier[j];
            let kort = type + " " + verdi
            kortstokk.push(kort)
        }
   
    }
 
    return kortstokk
}
/**
 * En funksjon for å trekke et kort fra kortstokken og plassere over i en spillers hånd.
 * 
 * @param {Number} antall Hvor mange kort som skal trekkes fra kortstokken
 * @param {Array} spiller Hvem skal få kortene (dealer eller spiller)
 * @param {Array} kortstokk Arrayet som holder kortstokken
 */
function trekkKort(antall, spiller, kortstokk) {
    for (let i = 0; i < antall; i ++) {
        let tilfeldigTall = Math.floor(Math.random() * kortstokk.length)
        let kort = kortstokk[tilfeldigTall]
        spiller.push(kort)
        kortstokk.splice(tilfeldigTall, 1)        
    }    
}

/**
 * En funksjon for å beregne verdien av hånden og returnerer denne. Funksjonen gjør om ess til 1, dersom verdi av hånd overstiger 21.
 * @param {Array} spiller Spilleren en skal bergne verdien av hånden på. (dealer eller spiller)
 * @returns {Number} Verdi av hånden
 */
function beregnVerdi(spiller) {
    let verdi = 0;

    for (let kort of spiller) {
        let verdien = kort.split(" ")[1]
        
        //Her ser vi et eksempel på en kontrollstruktur som ikke finnes i Python, men som kan være ganske grei i å bruke i noen tilfeller.
        //Vi kaller denne struktruen Switch/case (med fallthrough, i dette tilfellet)
        switch (verdien) {
            case "Konge":
            case "Dame":
            case "Knekt":
                verdi = verdi + 10
                break
            case "Ess":
                verdi = verdi + 11
                break
            default:
                verdi = verdi + parseInt(verdien)
        }
    }

    //Her blir ess gjort om til 1 i stedet for 11. (Tror jeg. Håper jeg! Skrik om du finner feil i logikken)
    if (verdi > 21 && spiller.includes("Hjerter Ess") || spiller.includes("Spar Ess") || spiller.includes("Ruter Ess") || spiller.includes("Kløver Ess")) {
        verdi = verdi - 10
    }

    return verdi    
}

/**
 * Denne funksjonen holder på selve spill-loopen. Spillet løper til du vinner eller taper, altså bustWin = true
 */
function spill() {
    let stokk = lagKortstokk()
    let dealer = []
    let spiller = []
    bustWin = false

    trekkKort(2, dealer, stokk);
    trekkKort(2, spiller, stokk);

    if(beregnVerdi(dealer) == 21 && beregnVerdi(spiller) < 21) {
        console.log("Dealer har BlackJack. Du taper")
        console.log(dealer[0])
        console.log(dealer[1])
        bustWin = true
    }

    //Her har vi et eksempel på en såkalt "game loop". Vi bruker en boolean, og lar en while-løkke kjøre så lenge denne false.
    while (!bustWin) {
        console.log(" ")
        console.log("Dealerens kort:")
        console.log("---------------")
        console.log("Ukjent")
        console.log(dealer[0])
    
        console.log(" ")    
    
        console.log("Dine kort:")
        console.log("---------- ")
        for (let kort of spiller) {
            console.log(kort)
        }

        console.log(" ")
        console.log(" ")
        hit = prompt("Hit? (Ja, nei)")
        //Her bruker vi sync-prompt for første gang. Ganske grei syntaks, eller hva? Tenkt Python.

        if (hit.toLowerCase() === "ja") {
            trekkKort(1, spiller, stokk)
            

            if (beregnVerdi(spiller) > 21) {
                console.log("BUST!")
                console.log("Dealer fikk: " + beregnVerdi(dealer))
                console.log("Du fikk: " + beregnVerdi(spiller))
                bustWin = true
            }
        } else if(hit.toLowerCase() === "nei") {

            //Når spiller ikke vil spille lenger, må dealer trekke så lenge den har under 16.
            while(beregnVerdi(dealer) < 17) {
                trekkKort(1, dealer, stokk)
            }

            //Her ligger all logikken for å avgjøre hvem som vinner. 
            //Legg merke til den utstrakte bruken av beregnVerdi() 
            //(Som altså returnerer ett tall. Tenk altså at det står et tall der i stedet for et funksjonskall)
            if (beregnVerdi(dealer) > 21 && beregnVerdi(spiller) < 21) {
                console.log("Dealer fikk BUST! Du vant!")
                console.log("Dealer fikk: " + beregnVerdi(dealer))
                console.log("Du fikk: " + beregnVerdi(spiller))
                bustWin = true
            } else if (beregnVerdi(spiller) === 21 && beregnVerdi(dealer) != 21) {
                console.log("Blackjack! Du vinner")
                console.log("Dealer fikk: " + beregnVerdi(dealer))
                console.log("Du fikk: " + beregnVerdi(spiller))
                bustWin = true 
            } else if(beregnVerdi(spiller) === 21 && beregnVerdi(dealer) === 21) {
                console.log("Blackjack. Men det hadde dealer også :( DRAW!")
                console.log("Dealer fikk: " + beregnVerdi(dealer))
                console.log("Du fikk: " + beregnVerdi(spiller))
                bustWin = true
            } else if(beregnVerdi(spiller) > beregnVerdi(dealer)) {
                console.log("Du vant. WIN!")
                console.log("Dealer fikk: " + beregnVerdi(dealer))
                console.log("Du fikk: " + beregnVerdi(spiller))
                bustWin = true
            } else if(beregnVerdi(spiller) < beregnVerdi(dealer)) {
                console.log("Du tapte!")
                console.log("Dealer fikk: " + beregnVerdi(dealer))
                console.log("Du fikk: " + beregnVerdi(spiller))
                bustWin = true
            } else if(beregnVerdi(spiller) == beregnVerdi(dealer)) {
                console.log("Uavgjort. DRAW!")
                console.log("Dealer fikk: " + beregnVerdi(dealer))
                console.log("Du fikk: " + beregnVerdi(spiller))
                bustWin = true
            }
        } else {
            console.log("UGYLDIG INPUT. PRØV IGJEN")
        }
    }

}

spill()
