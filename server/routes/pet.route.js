const PetController = require("../controllers/pet.controller"); //Imports controller

const routes = (app) => {
  app.get("/api/getAllPets", PetController.getAllPets);
  app.get("/api/getOnePet/:id", PetController.getOnePet);
  app.post("/api/createPet", PetController.createPet);
  app.put("/api/pet/:id", PetController.updatePet);
  app.delete("/api/deleteOnePet/:id", PetController.deleteOnePet);
};

module.exports = routes;
