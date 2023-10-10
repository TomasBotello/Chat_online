const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usuarios = new Schema({
    Nombre: String,
    email: String,
    Contraseña: String
})

module.exports = mongoose.model('datos', usuarios);

//todo esto es la estrucutra del formulario