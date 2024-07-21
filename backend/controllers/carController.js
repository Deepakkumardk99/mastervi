const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const Cars = require("../models/carsSchema");

router.get("", async (req, res) => {
  try {
    const data = await Cars.find();
    return res.status(201).send({ data: data });
  } catch (error) {
    return res.status(500).send({ message: error });
  }
});


router.post("", async (req, res) => {
  try {
    const cars = new Cars(req.body);
    const result = await cars.save();
    return res.status(201).send({ data: result });
  } catch (error) {
    return res.status(400).send({ message: error.message });
  }
});
router.get('/:id',  async (req, res) => {
  try {
    const carsId = mongoose.Types.ObjectId(req.params.id);
    const cars = await Cars.findById(carsId);
    if (!cars) {
      return res.status(404).send({ message: "Car not found" });
    }
    res.status(200).json(cars);
  } catch (err) {
    res.status(500).send(err);
  }
});
router.put("/:id" , async (req, res) => {
  try {
    const carsId = mongoose.Types.ObjectId(req.params.id);
    const cars = await Cars.findByIdAndUpdate(carsId, req.body, { new: true });
    if (!cars) {
      return res.status(404).send({ message: "Car not found" });
    }
    res.status(200).json(cars);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.delete("/:id",  async (req, res) => {
  try {
    const carsId = mongoose.Types.ObjectId(req.params.id);
    const cars = await Cars.findByIdAndDelete(carsId);
    if (!cars) {
      return res.status(404).send({ message: "Car not found" });
    }
    res.status(200).send({ message: "Car deleted successfully" });
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;

