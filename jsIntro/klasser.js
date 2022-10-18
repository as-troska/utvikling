// Skjelletet til et fotballspill laget i løpet av en skoletime

class spiller {
    constructor(navn, treffsikkerhet) {
        this.navn = navn;
        this.treffsikkerhet = treffsikkerhet

    }
    passning(mottaker) {

    }
    skudd() {
        if (this.treffsikkerhet > Math.floor(Math.random() * 10)) {
            return true
        } else {
            return false
        }
    }
}

let spiller1 = new spiller("Messi", 1 )
let spiller2 = new spiller("Steve Mackenzie" , 10)
let spiller3 = new spiller("Erik Dier", 5)

let lag = [spiller1, spiller2, spiller3]
let lag2 = [spiller1, spiller2, spiller3]

class Lag {
    constructor(spillere, navn, stadion) {
        this.spillere = spillere
        this.navn = navn
        this.stadion = stadion
    }
    kamp(motstander) {
        let hjemmelag = this.navn
        let bortelag = motstander.navn
        let stadion = this.stadion

        let tid = 90
        let hjemmelagMaal = 0
        let bortelagMaal = 0

        while(tid > 45) {
            let tilfeldighet = Math.floor(Math.random() * 20 + 1)

            if (tilfeldighet === 20) {
                console.log(hjemmelag + " skårer")
                hjemmelagMaal++
            } else if (tilfeldighet === 19) {
                console.log(bortelag + " skårer")
                bortelagMaal++
            }
            tid --

            if (tid === 45) {
                console.log("Resultatet ble: " + String(hjemmelagMaal) + " - " + String(bortelagMaal) )
            }
        }
    }
}

let tottenham = new Lag(lag, "Tottenham", "Tottenham Hotspur stadium")
let knarvik = new Lag(lag2, "Knarvik IL", "Knarvik stadion")

console.log(tottenham.spillere)
console.log("Treffer " + spiller1.navn + "? "  + String(spiller1.skudd()))
console.log("Treffer " + spiller2.navn + "? "  + String(spiller2.skudd()))
console.log("Treffer " + spiller3.navn + "? "  + String(spiller3.skudd()))

knarvik.kamp(tottenham)