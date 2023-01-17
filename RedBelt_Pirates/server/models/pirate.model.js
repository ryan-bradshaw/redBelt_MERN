const mongoose = require("mongoose")

const PirateSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "{PATH} is required"],
        minlength: [2, "{PATH} must be at least {MINLENGTH} characters"]
    },
    image: {
        type: String,
        required: [true, "{PATH} is required"]
    },
    numberOfTreasures: {
        type: Number,
        required: [true, "{PATH} is required"],
        min: [1, "Pirate must have at least {MIN} treasures found! Arr!"]
    },
    catchPhrase: {
        type: String,
        required: [true, "{PATH} is required"],
        minlength: [3, "{PATH} must be at least {MINLENGTH} characters"]
    },
    crewPosition: {
        type: String,
        required: [true, "{PATH} is required"]
    },
    pegLeg: {
        type: Boolean,
        required:[true, "{PATH} selection is required"]
    },
    eyePatch: {
        type: Boolean,
        required:[true, "{PATH} selection is required"]
    },
    hookHand: {
        type: Boolean,
        required:[true, "{PATH} selection is required"]
    }
    

}, {timestamps: true})

module.exports.Pirate = mongoose.model("Pirate", PirateSchema)