const express = require("express");
const hbs = require("hbs");
const path = require("path")
const app = express();
const port = 93;


app.set('view engine', 'hbs');

const viewsPath = path.join(__dirname, "views/pages");
app.set("views", viewsPath)
const partialsPath = path.join(__dirname, "views/partials")
hbs.registerPartials(partialsPath)

// app.get("/", (req, res) => {
//     res.send("Hello, world!")    
// })

// app.get("/2ITKB", (req, res) => {
//     res.send("Du går i 2ITKB")
// })

// app.get("/2ITKA", (req, res) => {
//     res.send("Du går i 2ITKA")
// })


// app.listen(port, () => {
//     console.log("Sørveren lytter på port 93");
//     console.log("Adressa til sørveren er: http://localhost:93")
// })

function rootRoute(request, response) {
    response.render("index", {
        title: "Hei, verd!",
        author: "Trond Sneås Skauge",
        interests: ["Laks", "Smør", "Gaudium"]
    })
}

app.get("", rootRoute)

app.listen(93, () => {
    console.log("Sørveren køyrer på port " + port)
})