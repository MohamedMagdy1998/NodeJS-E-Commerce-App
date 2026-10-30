const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');

dotenv.config({path:'config.env'});
const dbConnection = require('./Config/database');
const categoryRoute = require('./Routes/categoryRoute');


// Connect with db
dbConnection();

// Express App
const app = express();

// Middleware
app.use(express.json());

    if(process.env.NODE_ENV==="development")
        {
            app.use(morgan('dev'));
            console.log(`Mode : ${process.env.NODE_ENV}`)
        }

// Mount Routes
app.use('/api/v1/categories', categoryRoute);

const port = process.env.PORT || 8000;

app.listen(port,()=>
{

    console.log(`App Is Running on port ${port}`);
});


