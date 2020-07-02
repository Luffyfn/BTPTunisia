const Moe = require('../models/moe.model')

const moeController = {};
// Register moe
moeController.register = async (req, res, next) => {
    const {
        email,
        password,
        nom,
        prenom,
        nom_societe,
        adresse,
        activite,
        desription,
        date_inscription
    } = req.body;
    const newMoe = new Moe({
        email,
        password,
        nom,
        prenom,
        nom_societe,
        adresse,
        activite,
        desription,
        date_inscription
    });

    try {
        const moe = await newMoe.save();
        return res.send({moe});
    } catch (err) {
        if(err.code === 11000 && err.name === "MongoError"){
            let error = new Error(`Email (${newMoe.email}) is already taken`)
            next(error);
        }else{
            next(err);
        }
    }
};

module.exports = moeController;