var express = require("express");
var router = express.Router();

const JSONdb = require("simple-json-db");
const db = new JSONdb("./db.json");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

/* GET info on specific id. */
router.get("/:id", function (req, res, next) {
  res.json({ id: req.params.id });
});

module.exports = router;
