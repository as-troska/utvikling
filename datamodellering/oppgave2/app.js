const dbqueries = require("./dbqueries")
const express = require("express");
const hbs = require("hbs");
const path = require("path");


const app = express();

app.use(express.static(path.join(__dirname, "www")));
app.use(express.urlencoded({extended: true}))

app.set("view engine", hbs);
app.set("views", path.join(__dirname, "./views/pages"))
hbs.registerPartials(path.join(__dirname, "./views/partials"))

app.get("/visBand", (req, res) => {
    let id = req.query.id;
    res.render("band.hbs", dbqueries.giMegBand(id))  
})

app.post("/settInnMedlem", (req, res) => {
    console.log(req.body)
    let svar = req.body;
    if (svar.avgift == "on") {
        svar.avgift = 1
    } else {
        svar.avgift = 0
    }
    dbqueries.settInnMedlem(svar.fornavn, svar.etternavn, svar.gateadresse, svar.postnummer, svar.poststed, svar.avgift, svar.fodt)
    res.redirect("back")
})



app.listen(3000, () => {
    console.log("Server listening at port 3000, http://localhost:3000")
})