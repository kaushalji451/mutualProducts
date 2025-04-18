const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();
const port = 8080;

const {getStock} = require('./function/stockDetails');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get("/mutual_details", async(req, res) => {
  let name = req.query;
  try {
      let result = await getStock(name);
      res.status(200).json(result);    
  } catch (error) {
      res.status(500).json(error);
  }

    });

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
