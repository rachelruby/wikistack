const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const { db } = require('./models');
const index = require("./views/index")
const layout = require("./views/layout")
const main = require("./views/main")


const app = express();

const init = aync () => {
    await models.User.sync()
    await models.Page.sync()
    yourExpressAppVar.listen(PORT, () => {
        console.log(`Server is listening on port ${port}!`)
    })
}

app.use(morgan("dev"));
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send('Hello World!');
})

db.authenticate().
then(() => {
  console.log('connected to the database');
})


const PORT = 3000;

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});
