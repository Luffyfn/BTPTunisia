const express = require("express")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const router = express.Router()


const auth = require("../middleware/auth")
const moe = require("../models/moe")

//@Api:http://localhost:5000/api/auth
// @desc Auth Moe 
// access public

router.post('/', async (req, res) => {
    const {
        login,
        pwd
    } = req.body;
    
    //Find Moe
    moe.findOne({login})
        .then(moeToAuth => {
            if(!moeToAuth) return res.status(400).json({msg: "Moe doesn't exist"});

            //Pasword validation
            bcrypt.compare(pwd, moeToAuth.pwd)
                .then(isMatch => {
                    if(!isMatch) return res.status(400).json({msg: "Invalid password"})
                    jwt.sign(
                        {login: moeToAuth.login, pwd: moeToAuth.pwd},
                        config.get("jwtSecret"),
                        {expiresIn: 7200},
                        async (err, token) => {
                            try {
                                res.json({token, moeToAuth})
                            } catch (err) { 
                                console.log(err)                                       
                            }
                        }
                    )
                })
        })  
})

//@Api:http://localhost:5000/api/auth
// @desc Get Moe by id
// access private

router.get('/moe', auth, async (req, res) => {
    try {
      const moeById = await moe.findById(req.moe.id).select('-pwd');
      if (!moeById) console.log('User Does not exist');
      res.json(moeById);
    } catch (err) {
      res.status(400).json({ msg: err.message });
    }
  });

module.exports = router;
