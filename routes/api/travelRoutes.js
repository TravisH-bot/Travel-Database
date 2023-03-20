const router = require("express").Router();
const { Location, Traveler, Trip } = require("../../models");

// Get all travelers
// http://localhost:3001/api/travelers
router.get("/", async (req, res) => {
  try {
    const travelerData = await Traveler.findAll();
    res.status(200).json(travelerData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// POST create a new traveler
router.post("/", async (req, res) => {
  try {
    const travelerData = await Traveler.create({
      name: req.body.name,
      email: req.body.email,
    });
    res.status(200).json(travelerData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// GET a single traveler
router.get("/:id", async (req, res) => {
  try {
    const travelerData = await Traveler.findByPk(req.params.id, {
      include: [{ model: Location }, { model: Trip }],
    });

    if (!travelerData) {
      res.status(404).json({ message: "No traveler with that id!" });
      return;
    }

    res.status(200).json(travelerData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// DELETE a single traveler
router.delete("/:id", async (req, res) => {
  try {
    const travelerData = await Traveler.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!travelerData) {
      res.status(404).json({ message: "No traveler found with that id!" });
      return;
    }

    res.status(200).json(travelerData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
