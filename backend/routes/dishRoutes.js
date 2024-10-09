const express=require('express')

const router=express.Router();

const getDishes=require('../controllers/dishesControllers')

router.get("/dishes",getDishes)

module.exports=router