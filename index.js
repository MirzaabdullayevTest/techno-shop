const express = require('express')
const app = express()
const mongoose = require('mongoose')

const uri = 'mongodb+srv://Mirzaabdullayev:y4gbpBYq0sSEQV9D@cluster0.nfjiuah.mongodb.net/techno-shop'

// 63417e3af04588c24c11dde3 
// 63417fde7b192a08041e3836

const port = normalizePort(process.env.PORT || 3001)

async function dbConnection(){
    await mongoose.connect(uri, ()=>{
        console.log('MongoDB connected');
    })
}

dbConnection()

// Import routes 
const productRouter = require('./routes/product')
const categoryRouter = require('./routes/category')
const cardRouter = require('./routes/card')

// Middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.set('port', port)

// Routing
app.use('/products', productRouter)
app.use('/categories', categoryRouter)
app.use('/card', cardRouter)

try {
    app.listen(port, ()=>{
        console.log('Server working on port ', app.get('port'));
    })
} catch (error) {
    console.log(error);
    process.exit(1)
}

function normalizePort(val){ 
    const port = parseInt(val, 10)

    if(isNaN(port)){
        return val
    }

    if(port >= 0){
        return port
    }

    return false
}