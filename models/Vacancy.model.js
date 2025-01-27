const mongoose = require("mongoose");

const vacancySchema = mongoose.Schema({
    name: String,
    text: String,
    salary: Number,
    sity: String,
    company: String,
    userId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "User"
    },
    categoryId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Category"
    }
})

const Vacancy = mongoose.model("Vacancy", vacancySchema)

module.exports = Vacancy;