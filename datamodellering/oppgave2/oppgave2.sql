-- Creator:       MySQL Workbench 8.0.27/ExportSQLite Plugin 0.1.0
-- Author:        troska
-- Caption:       New Model
-- Project:       Name of the project
-- Changed:       2023-01-05 10:11
-- Created:       2023-01-05 09:22
PRAGMA foreign_keys = OFF;

-- Schema: oppgave2
ATTACH "oppgave2.db" AS "oppgave2";
BEGIN;
CREATE TABLE "oppgave2"."medlemmer"(
  "idmedlemmer" INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  "fornavn" VARCHAR(255),
  "etternavn" VARCHAR(255),
  "gateadresse" VARCHAR(255),
  "postnummer" VARCHAR(4),
  "poststed" VARCHAR(100),
  "avgift" INTEGER,
  "fodselsdato" DATE
);
CREATE TABLE "oppgave2"."rom"(
  "romnummer" INTEGER PRIMARY KEY NOT NULL,
  "romnavn" VARCHAR(255)
);
CREATE TABLE "oppgave2"."band"(
  "bandid" INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  "bandnavn" VARCHAR(255) NOT NULL,
  "rom_romnummer" INTEGER NOT NULL,
  "tid" VARCHAR(45),
  CONSTRAINT "fk_band_rom1"
    FOREIGN KEY("rom_romnummer")
    REFERENCES "rom"("romnummer")
);
CREATE INDEX "oppgave2"."band.fk_band_rom1_idx" ON "band" ("rom_romnummer");
CREATE TABLE "oppgave2"."bandmedlemmer"(
  "medlemmer_idmedlemmer" INTEGER NOT NULL,
  "band_bandid" INTEGER NOT NULL,
  "instrument" VARCHAR(45) NOT NULL,
  CONSTRAINT "fk_bandmedlemmer_medlemmer1"
    FOREIGN KEY("medlemmer_idmedlemmer")
    REFERENCES "medlemmer"("idmedlemmer"),
  CONSTRAINT "fk_bandmedlemmer_band1"
    FOREIGN KEY("band_bandid")
    REFERENCES "band"("bandid")
);
CREATE INDEX "oppgave2"."bandmedlemmer.fk_bandmedlemmer_medlemmer1_idx" ON "bandmedlemmer" ("medlemmer_idmedlemmer");
CREATE INDEX "oppgave2"."bandmedlemmer.fk_bandmedlemmer_band1_idx" ON "bandmedlemmer" ("band_bandid");
COMMIT;
