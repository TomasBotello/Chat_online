const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Producto = new Schema({
    marca: String,
    nombre: String,
    precio: String
})

module.exports = mongoose.model('datos', Producto);