const express = require("express");
const app = express();

app.get("/", function(req, res) {
    res.send("Hiya!");
})

const port = process.env.PORT || 3000;
app.listen(port, function() {
    console.log(`Server listening on port ${port}!`)
})