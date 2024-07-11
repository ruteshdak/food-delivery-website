const express = require('express')
//const { route } = require('./CreatUser')
const router = express.Router()

router.post('/foodData',(req,res)=>{
    try {
        //console.log(global.food_items2)
        res.send([global.food_items2,global.foodCategory]);
    } catch (error) {
        console.error(error.message);
        res.send("Server error");
    }
})
module.exports = router;