const express = require('express');
const indexRouter = require('./routes/index.route');
const path = require('path');
const bodyparser = require('body-parser');
const app = express();

app.set("view engine", "ejs");

app.use(bodyparser.urlencoded({ extended: false }));

const staticFilePath = path.join(__dirname, "public");
app.use(express.static(staticFilePath));

app.use(indexRouter);
app.listen(8000);

