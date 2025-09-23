const express = require('express')
const router = express.Router()
const User = require('../Model/user')

// add new user to the database

router.post('/register', async (req, res) => { 
    try {
        
        // get the data from request body
        const {name, age} = req.body

        const newUser = new User({name, age});
        await newUser.save()

        res.status(200).json({
            message : "User registration successful",
            user : newUser
        })

    } catch (error) {
  
        res.status(400).json({message : error.message})

    }
})

module.exports = router