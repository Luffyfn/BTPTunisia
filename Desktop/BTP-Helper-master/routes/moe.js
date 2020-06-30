const express = require("express")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const router = express.Router()


const moe = require("../models/moe")
const auth = require("../middleware/auth")

//@Api:http://localhost:5000/api/moe
// @desc get MOE 
// access public

router.get('/', async (req, res) => {
    try {
        const getAll = await moe.find()
        res.status(200).json(getAll)
    } catch (error) {
        res.status(500).json({
            errors: error
        })
    }
})

//@Api:http://localhost:5000/api/moe
// @desc add new MOE 
// access public

router.post('/', async (req, res) => {
    const {
        login,
        pwd,
        email,
        nom,
        prenom,
        date_inscription,
        nom_societe,
        adresse,
        desription,
        activite
    } = req.body;
    
    //Find Moe
    moe.findOne({login})
        .then(moeToCrypt => {
            if(moeToCrypt) return res.status(400).json({msg: "Moe existe déjà"});

            const newMoe = new moe({
                login,
                pwd,
                email,
                nom,
                prenom,
                date_inscription,
                nom_societe,
                adresse,
                desription,
                activite
            })
            
        //Salt and Hash
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newMoe.pwd, salt, async (err, hash) => {
                    try {
                        newMoe.pwd = hash;
                        await newMoe.save()
                            .then(moe => {
                                jwt.sign(
                                    {login: moe.login, pwd: moe.pwd},
                                    config.get("jwtSecret"),
                                    {expiresIn: 7200},
                                    async (err, token) => {
                                        try {
                                            res.json({token, moe})
                                        } catch (err) { 
                                            console.log(err)                                       
                                        }
                                    }
                                )
                            })
                    } catch (error) {
                        console.log(error)
                    }
                    
                })
            })
        })  
})

//@Api:http://localhost:5000/api/moe
// @desc delete MOE 
// access public

router.delete("/:_id", auth, async (req, res) => {
    const {
        _id
    } = req.params
    try {
        await moe.findOneAndDelete({
            _id
        })
        res.status(200).json("MOE Deleted")
    } catch (error) {
        res.status(500).json({
            errors: error
        })
    }
})

//@Api:http://localhost:5000/api/moe
// @desc edit MOE 
// access public

router.put("/:_id", auth, async (req, res) => {
    const {
        _id
    } = req.params
    try {
        const editedMoe = await moe.findOneAndUpdate({
            _id
        }, {
            $set: req.body

        })
        res.status(200).json("MOE Edited" + editedMoe)
    } catch (error) {
        res.status(500).json({
            errors: error
        })
    }
})

module.exports = router;