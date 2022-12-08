const express = require("express");
const app = express();
const port = 3001;
const cors = require("cors");
const router = require("./routes/index")
const error = require("./middlewares/errorHandler");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);
app.use(error);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

module.exports = app;
