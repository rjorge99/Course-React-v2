const mongoose = require('mongoose');

const dbConnection = () => {
    mongoose
        .connect(`${process.env.DB_CNN}`)
        .then(() => {
            console.log('DB is connected');
        })
        .catch((err) => {
            console.log(err);
        });
};

module.exports = dbConnection;
