const mongoose=require('mongoose')


//create a schema to CURD oprtaion 
const userSchema=new mongoose.Schema({
    name : {type:String, required:[true,'User must have name'], unique:true},
    age : {type:Number, required:[true,'user must have age info']},
    role : {type:String, default:"dev"},
    sal : {type:Number, required:[true, 'user must have sal info']}
})


//craeting model for schema
const User=mongoose.model('User',userSchema)

module.exports=User
