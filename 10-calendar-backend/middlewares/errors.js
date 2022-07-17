const error = (err, req, res, next) => {
    console.log(err);
    if (err) res.status(500).send('Something went wrong');
};

module.exports = error;
