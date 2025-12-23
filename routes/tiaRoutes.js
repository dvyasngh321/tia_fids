const express = require("express");
const {
  tiaArrivalData,
  tiaDepartureData,
  tiaDomArrivalData,
  tiaDomDepartureData,
} = require("../controllers/tiaDataControllers");

const router = express.Router();

router.get("/getTiaArrivalData", tiaArrivalData);

router.get("/getTiaDepartureData", tiaDepartureData);
router.get("/getTiaDomDepartureData", tiaDomDepartureData);
router.get("/getTiaDomArrivalData", tiaDomArrivalData);

module.exports = router;
