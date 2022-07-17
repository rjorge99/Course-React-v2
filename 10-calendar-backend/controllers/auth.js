const bcrypt = require('bcryptjs');

const Usuario = require('../models/Usuario');

const crearUsuario = async (req, res) => {
    const { email, password } = req.body;

    let usuario = await Usuario.findOne({ email });

    if (usuario) return res.status(400).json({ msg: 'El usuario ya existe' });

    usuario = new Usuario(req.body);

    const salt = bcrypt.genSaltSync(10);
    usuario.password = bcrypt.hashSync(password, salt);

    await usuario.save();

    res.status(201).json({
        ok: true,
        usuario
    });
};

const loginUsuario = async (req, res) => {
    const { email, password } = req.body;

    let usuario = await Usuario.findOne({ email });

    if (!usuario) return res.status(404).json({ msg: 'El usuario no existe' });

    const validPassword = bcrypt.compareSync(password, usuario.password);

    if (!validPassword) return res.status(400).json({ msg: 'El password es incorrecto' });

    res.json({
        ok: true,
        uid: usuario.id,
        name: usuario.name
    });
};

const revalidarToken = (req, res) => {};

module.exports = {
    crearUsuario,
    loginUsuario,
    revalidarToken
};
