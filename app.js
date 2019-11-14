const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const { db } = require('./models');
const index = require("./views/index");
const layout = require("./views/layout");
const main = require("./views/main");
const models = require('./models');
const html = require("html-template-tag");
const userRouter = require('./routes/user');
const wikiRouter = require('./routes/wiki');

const app = express();



app.use(morgan("dev"));
app.use('/wiki', wikiRouter);
app.use(express.static(__dirname + "/public/stylesheets"));
app.use(bodyParser.urlencoded({extended:false}));

app.get("/", (req, res) => {
    res.send('Hello World!');
})

// db.authenticate().
// then(() => {
//   console.log('connected to the database');
// })


const PORT = 3000;

// app.listen(PORT, () => {
//   console.log(`App listening in port ${PORT}`);
// });

const init = async () => {
  // await models.User.sync()
  await models.Page.sync()
  app.listen(PORT, () => {
      console.log(`Server is listening on port ${port}!`)
  })
}