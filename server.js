const express=require('express')
const dotenv=require('dotenv')
const controller=require('./controllers/userControler')

const mongoose=require('mongoose')
dotenv.config({path:'./config.env'})
const User=require('./models/userModel')


//connecting mongoDB
const DB='mongodb+srv://pavan:pavan@cluster0.avsecbw.mongodb.net/auth?retryWrites=true&w=majority'
mongoose.connect(DB)
.then(()=>console.log("db connection done"))



const app=express()
app.use(express.json())

app.route('/api/v1/users').post(controller.createUser)

app
    .route('/api/v1/users')
    .get(controller.getAllUsers)
    .post(controller.createUser)

app
    .route('/api/v1/users/:id')
    .get(controller.getUser)
    .patch(controller.upadateUsers)
    .delete(controller.deleteUsers)


app.listen(3000,()=>{
    console.log("i am from app");
})