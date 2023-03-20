const Location = require("./Location");
const Traveler = require("./Traveler");
const Trip = require("./Trip");

Traveler.belongsToMany(Location, {
  through: {
    model: Trip,
    unique: false,
  },
  as: "planned_trips",
});

Location.belongsToMany(Traveler, {
  through: {
    model: Trip,
    unique: false,
  },
  as: "location_travelers",
});

module.exports = { Location, Traveler, Trip };
