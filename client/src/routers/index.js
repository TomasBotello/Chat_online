const express = require('express');
const router =  express.Router();
const model = require('../models/datos.js')();
const usuarios = require('../models/datos.js');

router.get('/', async (req, res) => {
    
        const datos = await usuarios.find();
        console.log(datos);
        res.render('index.ejs', {
            datos
        });
    } 
);
// Ruta para mostrar la página de registro
router.get('/registro', (req, res) => {
    res.render('registro.ejs'); // Renderiza el archivo registro.ejs
});

// Guarda el formulario de registro
router.post('/add', async (req, res) =>{
    const valor = new usuarios(req.body);
    console.log(req.body);
    await valor.save();
    res.redirect('/');
});
// router.get('/del/:id', async(req, res) =>{
//     const {id}=req.params;
//     await usuarios.findByIdAndRemove;
//     res.redirect('/');
// });
// router.get('/eliminar/:id', async (req, res) => {
//     try {
//         const id = req.params.id;
//         await usuarios.findByIdAndDelete(id);
//         res.redirect('/');
//     } catch (error) {
//         console.error(error);
//         res.status(500).send('Error en el servidor');
//     }
// });



// Ruta para mostrar la página principal
router.get('/', async (req, res) => {
    try {
        const datos = await usuarios.find();
        res.render('index.ejs', {
            datos
        });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error en el servidor');
    }
});


module.exports = router;
