const PirateController = require("../controllers/pirate.controller")

module.exports = (app) => {
    app.get("/api", PirateController.index) //index
    app.get("/api/pirates", PirateController.allPirates) //get all
    app.get("/api/pirates/:id", PirateController.onePirate) //get one
    app.post("/api/pirates", PirateController.createPirate) //create
    app.put("/api/pirates/:id", PirateController.updatePirate) //update
    app.delete("/api/pirates/:id", PirateController.deletePirate) //delete
}