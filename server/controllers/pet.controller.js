const Pet = require("../models/pet.model");

module.exports.getAllPets = (req, res) => {
  Pet.find()
    .then((allPets) => {
      console.log(allPets);
      res.json({ pet: allPets });
    })
    .catch((err) => {
      console.log(res);
      res.status(400).json(err);
    });
};

module.exports.createPet = (req, res) => {
  console.log(req.body); //Debug console.log
  Pet.create(req.body)
    .then((addOnePet) => {
      res.json({ Pet: addOnePet });
    })
    .catch((err) => {
      // res.json({ message: "No Pets Were Added", error: err });
      console.log(res);
      res.status(400).json(err);
    });
};

module.exports.getOnePet = (req, res) => {
  //   console.log(req.body); //Debug console.log
  Pet.findOne({ _id: req.params.id })
    .then((e) => res.json(e))
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
};

module.exports.deleteOnePet = (req, res) => {
  console.log(req.body); //Debug console.log
  console.log("new paramsID", req.params.id);
  Pet.deleteOne({ _id: req.params.id })
    .then((e) => res.json(e))
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
};

module.exports.updatePet = (req, res) => {
  Pet.findByIdAndUpdate(req.params.id, req.body, { runValidators: true })

    .then((updatedPet) => {
      res.json({ pet: updatedPet });
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
};
