const router = require("express").Router();
const { Location, Traveler, Trip } = require("../../models");

// POST to trip data for traveler and location
// http://localhost:3001/api/trips
router.post("/", async (req, res) => {
  try {
    const tripData = await Trip.create({
      trip_budget: req.body.trip_budget,
      traveler_amount: req.body.traveler_budget,
      traveler_id: req.body.traveler_id,
      location_id: req.body.location_id,
    });
    res.status(200).json(tripData);
  } catch (err) {
    res.status(400), json(err);
  }
});

// DELETE a trip
router.delete("/:id", async (req, res) => {
  try {
    const tripData = await Trip.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!tripData) {
      res.status(404).json({ message: "No trip found with that id!" });
      return;
    }

    res.status(200).json(tripData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
