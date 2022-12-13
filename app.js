const { application } = require('express')
const express = require('express')

const app = express()

// app.get('/',(req,res)=>{
//     res.status(200).json({
//         message:'Hi pavan, i am from expresss',
//         devloper:"Pavan"
//     })
// })

// app.post('/',(req,res)=>{
//     res.send('You can not post')
// })

// app.get('/api/v1/tours',(req,res)=>{
//     res.
// })

const getAllUsers=(req,res)=>{
    res.status(500).json({
        status:'error',
        message:'This router not definned'
    })
}

const createUser=(req,res)=>{
    res.status(500).json({
        status:'error',
        message:'This router not definned'
    })
}
const getUser=(req,res)=>{
    res.status(500).json({
        status:'error',
        message:'This router not definned'
    })
}
const upadateUsers=(req,res)=>{
    res.status(500).json({
        status:'error',
        message:'This router not definned'
    })
}
const deleteUsers=(req,res)=>{
    res.status(500).json({
        status:'error',
        message:'This router not definned'
    })
}

app
    .route('/api/v1/users')
    .get(getAllUsers)
    .post(createUser)

app
    .route('/api/v1/users/:id')
    .get(getUser)
    .patch(upadateUsers)
    .delete(deleteUsers)

    
const port=3000
app.listen(port,()=>{
    console.log(`App running on port ${port}...`);
})
