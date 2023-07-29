// Router Middleware
const express = require("express");
const router = express.Router();
const helper = require("../helper");

// GET API
router.get("", async (req, res) => {
  // res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  let data = await helper.readFile("data.json");
  res.send(data);
});

router.get("/:id", async (req, res) => {
  let data = await helper.readFile("data.json");
  let obj = data.find((e) => e.id == req.params.id);
  if (obj) {
    res.send(obj);
  } else {
    res.status(404).send("Error 404 Not Found");
  }
});

router.post("", async (req, res) => {
  let data = await helper.readFile("data.json");
  data.push(req.body);
  await helper.writeFile("data.json", JSON.stringify(data));
  res.send("Success");
});

router.put("/:id", async (req, res) => {
  let data = await helper.readFile("data.json");
  let idxToChange = data.findIndex((e) => e.id == req.params.id);
  if (idxToChange === -1) {
    res.status(400).send({
      errorCode: "400",
      errorMessage: "Id Not Found",
    });
    return;
  }
  data[idxToChange] = req.body;
  await helper.writeFile("data.json", JSON.stringify(data));
  res.send("Success");
});

router.patch("/:id", async (req, res) => {
  let data = await helper.readFile("data.json");
  let idxToChange = data.findIndex((e) => e.id == req.params.id);
  data[idxToChange].name = req.body.name;
  await helper.writeFile("data.json", JSON.stringify(data));
  res.send("Success");
});

router.delete("/:id", async (req, res) => {
  let data = await helper.readFile("data.json");
  let idxToChange = data.findIndex((e) => e.id == req.params.id);
  data.splice(idxToChange, 1);
  await helper.writeFile("data.json", JSON.stringify(data));
  res.send(data);
});

module.exports = router;
