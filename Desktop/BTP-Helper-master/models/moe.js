const mongoose = require("mongoose")

const schema = mongoose.Schema;


const moeSchema = new schema({
    login: {
        type: String,
        required: true,
        unique: true
    },
    pwd: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    nom: {
        type: String,
        required: true
    },
    prenom: {
        type: String,
        required: true
    },
    date_inscription: {
        type: Date,
        default: Date.now
    },
    nom_societe: {
        type: String,
        required: true
    },
    adresse: {
        type: String

    },
    desription: {
        type: String

    },
    activite:{
        type:String,
        required: true
    }

})

module.exports = moe = mongoose.model("moe", moeSchema)