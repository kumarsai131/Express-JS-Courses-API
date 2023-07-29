const express = require("express");
const router = express.Router();

router.all("/users", (req, res) => {
  // GET, POST, DELETE, PUT
  res.send("HIIII");
});

router.get("/getURL", (req, res) => {
  let url =
    req.protocol + "://" + req.host + ":" + process.env.PORT + req.originalUrl;
  console.log(url);
});

module.exports = router;
