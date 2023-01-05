const db = require("better-sqlite3")("oppgave2.db")

function skrivUtBand(bandid) {
    const navn = db.prepare("SELECT bandnavn FROM band WHERE bandid = ?").get(bandid)    

    const medlemmer = db.prepare("SELECT medlemmer.fornavn, medlemmer.etternavn, band.bandnavn, bandmedlemmer.instrument FROM bandmedlemmer INNER JOIN medlemmer ON bandmedlemmer.medlemmer_idmedlemmer = medlemmer.idmedlemmer INNER JOIN band ON bandmedlemmer.band_bandid = band.bandid WHERE band.bandid = ?").all(bandid)
    
    console.log("Bandet " + navn.bandnavn + " har følgende medlemmer:");
    for (let medlem of medlemmer) {
        console.log(medlem.fornavn + " " + medlem.etternavn + " - " + medlem.instrument)
        
    }
    console.log(" ")
}

skrivUtBand("1")
skrivUtBand("2")
skrivUtBand("3")

