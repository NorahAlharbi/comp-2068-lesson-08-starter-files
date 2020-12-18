const person = require('../models/person');

exports.index = async (req, res, next) => {
    try {
      const people = await Person.find();
      res.status(200).json(people);
    } catch (error) {
      next(error);
    }
  }
  
  exports.show = async (req, res, next) => {
    try {
      const person = await Person.findById(req.params.id);
      res.status(200).json(person);
    } catch (error) {
      next(error);
    }
  }
  
  exports.create = async (req, res, next) => {
    console.log(req.body);
  
    try {
      const { name, hobbies, gender, date } = req.body;
      const pr = await Person.create({
        name,
        hobbies,
        gender,
        date: new Date(date)
      });
      res.status(200).json({message: 'Person was created successfully', status: 'success', person: pr});
    } catch (error) {
      next(error);
    }
  }
  
  exports.update = async (req, res, next) => {
    try {
      const { _id, name, hobbies, gender, date } = req.body;
      const pr = await Person.findOneAndUpdate({ _id }, {
        name,
        hobbies,
        gender,
        date: new Date(date)
      });
      res.status(200).json({message: 'Person was updated successfully', status: 'success', person: pr});
    } catch (error) {
      next(error);
    }
  }
  
  exports.destroy = async (req, res, next) => {
    try {
      const { _id } = req.body;
      await Person.findOneAndDelete({ _id });
      res.status(200).json({message: 'Person was deleted successfully', status: 'success'});
    } catch (error) {
      next(error);
    }
  }