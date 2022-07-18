const moment = require('moment');

const isDate = (value) => {
    if (!value) return false;

    const fecha = moment(value);
    return fecha.isValid();
};

module.exports = isDate;
