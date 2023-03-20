const router = require("express").Router();
const { Location, Traveler, Trip } = require("../../models");

// GET all locations
// http://localhost:3001/api/locations
router.get("/", async (req, res) => {
  try {
    const locationData = await Location.findAll();
    res.status(200).json(locationData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// POST create a new location
router.post("/", async (req, res) => {
  try {
    const locationData = await Location.create({
      location_name: req.body.location_name,
    });
    res.status(200).json(locationData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// DELETE a single location
router.delete("/:id", async (req, res) => {
  try {
    const locationData = await Location.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!locationData) {
      res.status(404).json({ message: "No location found with that id!" });
      return;
    }

    res.status(200).json(locationData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
