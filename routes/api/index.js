const router = require("express").Router();
const travelRoutes = require("./travelRoutes");
const locationRoutes = require("./locationRoutes");
const tripRoutes = require("./tripRoutes");

router.use("/travelers", travelRoutes);
router.use("/locations", locationRoutes);
router.use("/trips", tripRoutes);

module.exports = router;
