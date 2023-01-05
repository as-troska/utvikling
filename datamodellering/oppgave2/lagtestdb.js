const db = require("better-sqlite3")("oppgave2.db", {verbose: console.log})
const fs = require("fs");

//Script for å lage databasen. Dette kan gjøres på andre måter
const sql = fs.readFileSync("oppgave2.sql", "utf8");
db.exec(sql);

function insertMedlem(fornavn, etternavn, gateadresse, postnummer, poststed, avgift, fodselsdato) {
    const statement = db.prepare("INSERT INTO medlemmer (fornavn, etternavn, gateadresse, postnummer, poststed, avgift, fodselsdato) VALUES (?, ?, ?, ?, ?, ?, ?)");
    statement.run(fornavn, etternavn, gateadresse, postnummer, poststed, avgift, fodselsdato)
}

function insertRom(romnummer, romnavn) {
    const stmt = db.prepare("INSERT INTO rom (romnummer, romnavn) VALUES (?, ?)");
    stmt.run(romnummer, romnavn)
}

function insertBand(bandnavn, romnummer, tid) {
    const stmt = db.prepare("INSERT INTO band (bandnavn, rom_romnummer, tid) VALUES (?, ?, ?)");
    stmt.run(bandnavn, romnummer, tid)
}

function insertBandmedlemmer(medlem, band, instrument) {
    const stmt = db.prepare("INSERT INTO bandmedlemmer (medlemmer_idmedlemmer, band_bandid, instrument) VALUES (?, ?, ?)")
    stmt.run(medlem, band, instrument)
}

insertMedlem("Trond", "Skauge", "Langheiane 89", "5914", "Isdalstø", 1, "1984-22-01")
insertMedlem("Lars", "Larsen", "Veivegen 22", "5914", "Isdalstø", 1, "2009-22-01")
insertMedlem("Helga", "Gudleivsdottir", "Vegveien 110", "5008", "Bergen", 1, "2006-31-03")
insertMedlem("Heidi", "Thorsen", "Beinvegen 233", "5142", "Hauglandshella", 1, "2005-14-07")

insertRom("1", "Øvingsrom 1")
insertRom("2", "Øvingsrom 2")
insertRom("3", "Øvingsrom 3")
insertRom("4", "Øvingsrom 4")
insertRom("5", "Øvingsrom 5")

insertBand("Godspeed You! White Penguin", "1", "Mandag 10-15");
insertBand("Sjøsamarane", "2", "Mandag 15-18");
insertBand("Rage Against the Lox", "1", "Fredag 18-23");

insertBandmedlemmer("1" , "1", "Gong")
insertBandmedlemmer("2" , "1", "Gitar")
insertBandmedlemmer("3" , "1", "Trommer")

insertBandmedlemmer("1", "2", "Gong")
insertBandmedlemmer("4", "2", "Keyboard")
insertBandmedlemmer("5", "2", "Gitar")

insertBandmedlemmer("1", "3", "Gong")
insertBandmedlemmer("2", "3", "Slagverk")
insertBandmedlemmer("3", "3", "Vokal")
insertBandmedlemmer("4", "3", "Harpe")
i

