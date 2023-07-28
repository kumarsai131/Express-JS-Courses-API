const express = require("express");
const app = express();
const helper = require("./helper");
require("dotenv").config();

// GET API - Retrieves the data and sends it to the user
// POST API - Add new data into the existing records
// text/plain
// text/html
// application/json
// text/xml

// CR UD
// Put Patch
// Delete (app.delete)

// Middlewares
app.use(express.json());

// GET API
app.get("/api/courses", async (req, res) => {
  //   console.log(req.query);
  let data = await helper.readFile("data.json");
  res.send(data);
});

app.get("/api/courses/:id", async (req, res) => {
  //   console.log(req.params, req.params.id, typeof req.params.id);
  let data = await helper.readFile("data.json");
  let obj = data.find((e) => e.id == req.params.id);
  console.log(obj);
  if (obj) {
    res.send(obj);
  } else {
    // res.status(400).send("Object Not Found");
    res.status(404).send("Error 404 Not Found");
  }
});

app.post("/api/courses", async (req, res) => {
  console.log(req.body);
  let data = await helper.readFile("data.json");
  data.push(req.body);
  await helper.writeFile("data.json", JSON.stringify(data));
  res.send("Success");
});

app.listen(process.env.PORT);

// http://localhost:8081/
// Modules
// async, await
// === data data type
