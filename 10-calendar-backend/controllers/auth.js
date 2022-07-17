const { response } = require("express");
const bcrypt = require("bcryptjs");
const Usuario = require("../models/Usuario");
const { generarJWT } = require("../helpers/jwt");

//se agrega express y el tipo de response para poder tener intelissense
const crearUsuario = async (req, res = response) => {
    const { email, password } = req.body;

    try {
        let usuario = await Usuario.findOne({ email });

        if (usuario)
            return res.status(400).json({
                ok: false,
                msg: "Es usuario ya existe con ese correo"
            });

        usuario = new Usuario(req.body);

        //Encriptar contrasena
        const salt = bcrypt.genSaltSync();
        usuario.password = bcrypt.hashSync(password, salt);

        await usuario.save();

        //Generar Json Web Token
        const token = await generarJWT(usuario.id, usuario.name);

        res.status(201).json({
            ok: true,
            uid: usuario.id,
            name: usuario.name,
            token
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: "Hable con el administrador"
        });
    }
};

const loginUsuario = async (req, res = response) => {
    const { email, password } = req.body;

    try {
        const usuario = await Usuario.findOne({ email });

        if (!usuario)
            return res.status(400).json({
                ok: false,
                msg: "Es usuario no existe con ese correo"
            });

        //Confirmar password
        const validPassword = bcrypt.compareSync(password, usuario.password);

        if (!validPassword)
            return res.status(400).json({
                ok: false,
                msg: "Password incorrecto"
            });

        //Generar Json Web Token
        const token = await generarJWT(usuario.id, usuario.name);

        res.json({
            ok: true,
            uid: usuario.id,
            name: usuario.name,
            token
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: "Hable con el administrador"
        });
    }
};

const revalidarToken = async (req, res = response) => {
    const { uid, name } = req;

    // Generar un JWT y retornarlo en esta peticion
    const token = await generarJWT(uid, name);

    res.json({
        ok: true,
        uid,
        name,
        token
    });
};
module.exports = {
    crearUsuario,
    loginUsuario,
    revalidarToken
};
