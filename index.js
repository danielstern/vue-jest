const express = require('express');
const PORT = process.env.PORT || 7777;
const app = new express();

app.use("/", express.static(__dirname + "/bin"));
app.use("/", express.static(__dirname + "/public"));


app.listen(PORT, console.info("App listening on: ", PORT));