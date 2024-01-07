const express = require("express");

const app = express()

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get("/", function(req, res) {
    return res.send({
        hello: "world"
    });
});

app.get("/data-diri", function(req, res) {
    // diganti dan ambil dari databse
    return res.send({
        nama: "Hanif",
        umur: 20,
        dob: "12 Mei 1998"
    });
})

app.listen(3002, console.log("I am running on port 3002"));