const {Pirate} = require("../models/pirate.model")

//index
module.exports.index = (req, res) => {
    
}

//get ALL
module.exports.allPirates = (req, res) => {
    Pirate.find({})
        .then(pirates => res.json(pirates))
        .catch(err => res.status(400).json(err))
}

//get ONE
module.exports.onePirate = (req, res) => {
    Pirate.findOne({_id:req.params.id})
        .then(pirate => res.json(pirate))
        .catch(err => res.status(400).json(err))
}

//CREATE
module.exports.createPirate = (req, res) => {
    console.log("hello create")
    Pirate.create(req.body)
        .then(pirate => res.json(pirate))
        .catch(err => res.status(400).json(err))
}

//UPDATE
module.exports.updatePirate = (req, res) => {
    Pirate.findOneAndUpdate({_id:req.params.id}, req.body, {new:true, runValidators:true})
        .then(pirate => res.json(pirate))
        .catch(err => res.status(400).json(err))
}

//DELETE
module.exports.deletePirate = (req, res) => {
    Pirate.deleteOne({_id:req.params.id})
        .then(pirate => res.json(pirate))
        .catch(err => res.status(400).json(err))
}