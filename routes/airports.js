const router = require("express").Router();
const axios = require("axios").default;

router.post("/", (req, res) => {
  // GETTING THE INPUTS FROM THE FORM 👇
  const { airport, startDate, endDate } = req.body;

  // TRANSFORM THE DATES IN UNIX TIME 👇
  const startUnixTime = new Date(startDate).getTime() / 1000;
  // console.log(startUnixTime);

  const endUnixTime = new Date(endDate).getTime() / 1000;
  // console.log(endUnixTime);

  // MAKING THE REQUEST TO THE API 👇
  axios
    .get(
      `https://opensky-network.org/api/flights/arrival?airport=${airport}&begin=${startUnixTime}&end=${endUnixTime}`
    )
    .then((arrivals) => {
      // console.log(arrivals.data);
      return res.json(arrivals.data);
    })
    .catch((err) => {
      console.log("err:", err);
    });
});

module.exports = router;
