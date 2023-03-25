const mongoose = require("mongoose");

// .then(() => {
//   console.log(`Successfully connected to the DataBase`);
// })
// .catch((err) => {
//   console.log(`Error connecting to the database: ${err}`);
// });

const PetShelterSchema = new mongoose.Schema(
  {
    petName: {
      type: String,
      required: [true, "The Pets name is required"],
      minLength: [3, "Name must be at least 3 characters long"],
    },
    petType: {
      type: String,
      required: [true, "The Pet Type is required"],
      minLength: [3, "Pet Type must be at least 3 characters long"],
    },

    petDescription: {
      type: String,
      required: [true, "The Pet Description is required"],
      minLength: [3, "Pet Description must be at least 3 characters long"],
    },

    petSkills: {
      type: String,
      emum: ["Skill#1", "Skill#2", "Skill#3"],
    },
  },
  { timestamps: true }
);

const Pet = mongoose.model("Pet", PetShelterSchema); //Turns Pet into a model
module.exports = Pet;
