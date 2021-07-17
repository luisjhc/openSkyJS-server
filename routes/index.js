const router = require("express").Router();

// Home page 👇
router.get("/", (req, res, next) => {
  res.json("All good in here");
});

// Airports page 👇
const airportsRoutes = require("./airports");
router.use("/airports", airportsRoutes);

module.exports = router;
