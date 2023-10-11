const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Esquema para la colección "chat"
const chatSchema = new Schema({
    nombre: String,
    mensaje: String,
}, {
    versionKey: false 
});

// Esquema para la colección "cuentas"
const cuentaSchema = new Schema({
    Nombre: String,
    email: String,
    Contraseña: String
}, {
    versionKey: false 
});


  module.exports = {
    datosModel: mongoose.model('datos', chatSchema),
    registroModel: mongoose.model('registro', cuentaSchema)
};