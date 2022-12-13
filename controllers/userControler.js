const User=require('./../models/userModel')

//creting user
const createUser= async (req, res)=>{
    try{
        const newUser= await User.create(req.body)
        res.status(201).json({
            status:"Sucess",
            data:{
                User:newUser
            }
        })
    }
    catch(err){
        res.status(400).json({
            status:"Fail",
            message:err
        })
    }
}


/// getting all the users
const getAllUsers=async(req, res)=>{
    try{
        const newUser= await User.find({role:"test"})
        res.status(201).json({
            status:"Sucess",
            total_Users:newUser.length,
            data:{
                User: newUser
            }
        })
    }
    catch(err){
        res.status(400).json({
            status:"Fail",
            message:err
        })
    }
}

///getting one user by id
const getUser=async(req, res)=>{
    try{
        const newUser= await User.findById(req.params.id) 
        res.status(201).json({
            status:"Sucess",
            total_Users:newUser.length,
            data:{
                User: newUser
            }
        })
    }
    catch(err){
        res.status(400).json({
            status: "Fail",
            message: err
        })
    }
}


///updating users by id 
const upadateUsers=async(req, res)=>{
    try{
        const newUser= await User.findByIdAndUpdate(req.params.id, req.body)
        res.status(201).json({
            status:"Sucess",
            //total_Users:newUser.length,
            data:{
                User: "newUser updated"
            }
        })
    }
    catch(err){
        res.status(400).json({
            status: "Fail",
            message: err
        })
    }
}

///delete item
const deleteUsers=async(req, res)=>{
    try{
        const newUser= await User.findByIdAndDelete(req.params.id)
        res.status(201).json({
            status:"Sucess",
            total_Users:newUser.length,
            data:{
                User: newUser
            }
        })
    }
    catch(err){
        res.status(400).json({
            status: "Fail",
            message: err
        })
    }
}

module.exports={createUser, getAllUsers, getUser, upadateUsers, deleteUsers}