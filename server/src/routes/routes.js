const express = require("express");
const passport = require('passport');
const router = express.Router();

const moeController = require("../controllers/moe.controller");
const produitController = require("../controllers/produit.controller");

// Auth and register
router.post('/register', moeController.register);
router.post('/login', moeController.login);
router.get('/moe', moeController.get);

// Customize and protect the routes
router.all('*', (req, res, next) => {
    passport.authenticate('jwt', { session: false }, (err, moe) => {
        if(err || !moe) {
            const error = new Error('You are not authorized to access');
            error.status = 401;
            throw error;
        }

        req.moe = moe;
        return next();
    })(req, res, next);
});

// Protected routes
router.get('/profile', (req, res, next) => {
    return res.send({ 
        message: "You are authenticated",
        moe: req.moe
    });
});


router.get('/produit', produitController.get);
router.post('/produit', produitController.create);
router.put('/produit/:_id', produitController.update);
router.delete('/produit/:_id', produitController.delete);

router.put('/moe/:_id', moeController.update);
router.delete('/moe/:_id', moeController.delete);

module.exports = router;