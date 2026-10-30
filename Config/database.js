const mongoose = require('mongoose');

const dbConnection = ()=>
{
    mongoose
    .connect(process.env.DB_URI).then((Connection) =>
        {
            console.log(`Database Connected : ${Connection.connection.host}`);
        })
    .catch((err)=>
        {
            console.log(`Database Error : ${err}`);
            process.exit(1);
        });
}

module.exports = dbConnection;    