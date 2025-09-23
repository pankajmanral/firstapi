const express = require('express')
const router = express.Router()
const userModel = require('../Model/user')

router.post('/register', async (req, res) => {
    try {

        // destructure
        const { name, age } = req.body;

        // check if the name already exists 
        const existingUser = await userModel.findOne({ name })
        if (existingUser) {
            return res.status(400).json({
                message: "User already exist"
            })
        }

        const userObj = new userModel({ name, age })
        await userObj.save()

        res.status(200).json({
            message: "Registration Successfull",
            user: userObj
        })

    } catch (error) {

        res.status(400).json({
            message: error.message
        })

    }
})

router.post('/login', async (req, res) => {
    try {
        
        const { name } = req.body

        const existingUser = await userModel.findOne({ name })
        
        if(!existingUser){
            return res.status(400).json({
                message : "User does not exist. Please register first"
            })
        }

        return res.status(200).json({
            message : "Login successfull",
            user : existingUser
        })

    } catch (error) {

        return res.status(400).json({
            error : error.message
        })

    }
})

router.get('/users', async (req, res) => {

    try {
        
        const allUser = await userModel.find()

        return res.status(200).json({
            message : "Fetched all users",
            userData : allUser
        })

    } catch (error) {

        return res.status(400).json({
            message : error.message
        })

    }

})

module.exports = router