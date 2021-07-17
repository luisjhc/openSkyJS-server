const router = require("express").Router();

// Home page 👇
router.get("/", (req, res, next) => {
  res.json("All good in here");
});

module.exports = router;
