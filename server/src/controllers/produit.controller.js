const Produit = require('../models/produit.model')

const produitController = {};

// Get products
produitController.get = async (req, res, next) => {
    const { moe } = req;

    const id = {
        owner: moe._id
    }

    try {
        const produits = await Produit.find(id);
        return res.send({
            message: `Produits de ${moe.prenom} ${moe.nom}`,
            produits
        })

    } catch (err) {
        next(err);
    }
}

// Create product
produitController.create = async (req, res, next) => {
    const { moe } = req;

    const {
        nom,
        type,
        description,
        prix,
        photo,
        date_ajout
    } = req.body;

    const newProduit = new Produit({
        nom,
        type,
        description,
        prix,
        photo,
        date_ajout,
        owner: moe
    }); 

    try {
        const produit = await newProduit.save();
        return res.send({
            success: true,
            produit
        });

    } catch (err) {
        next(err);
    }
}

// Delete product
produitController.delete = async (req, res, next) => {
    const { _id } = req.params;

    try {
        await Produit.deleteOne({ _id })
        return res.send({
            message: "Produit supprimé"
        })
    } catch (err) {
        next(err);
    }
}

// Update product
produitController.update = async (req, res, next) => {
    const { _id } = req.params;
   
    try {
        await Produit.findOneAndUpdate(
            { _id }, 
            { $set: req.body }
        )
        return res.send({
            message: "Produit modifié"
        })
    } catch (err) {
        next(err);
    }
}

module.exports = produitController;