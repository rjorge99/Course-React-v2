const jwt = require('jsonwebtoken');

const validarJWT = (req, res, next) => {
    console.log('aonseu');
    const token = req.header('x-token');

    if (!token) return res.status(401).json({ msg: 'No hay token' });

    const { uid, name } = jwt.verify(token, process.env.JWT_SECRET);
    req.uid = uid;
    req.name = name;

    next();
};

module.exports = validarJWT;
