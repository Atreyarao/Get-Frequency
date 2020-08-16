const express = require("express");
const cors = require('cors');
const bodyParser = require("body-parser");
const getFreq = require("./Routes/api/getFreq");
var path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
app.use("/routes/api/", getFreq);




const port = process.env.PORT || 1234;

app.listen(port, () => {
    console.log(`Server up and running on port ${port}!`);
});

