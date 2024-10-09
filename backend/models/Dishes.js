const mongoose=require('mongoose')

const DishesModel=mongoose.model('dishes',{
    name:{
        type:String,
        required:true
    },
    img:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    quality:{
        type:String,
        require:true
    }
})

module.exports=DishesModel