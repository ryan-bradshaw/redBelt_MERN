const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost/pirates_db", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("Connection established to Pirates Database"))
    .catch(err => console.log("Something went wrong connecting to Pirates Database", err));