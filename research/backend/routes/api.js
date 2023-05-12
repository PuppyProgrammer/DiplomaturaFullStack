var express = require('express');
var router = express.Router();
var criptidosModel = require('./../models/criptidosModel');
var cloudinary = require('cloudinary').v2;
var nodemailer = require('nodemailer');


router.get('/criptidos', async function (req, res, next) {
    let criptidos = await criptidosModel.getCriptidos();

    criptidos = criptidos.map(criptidos => {
        if (criptidos.img_id) {
            const imagen = cloudinary.url(criptidos.img_id, {
                width: 200,
                height: 200,
                crop: 'fill'
            });
            return {
                ...criptidos,
                imagen
            }
        } else {
            return {
                ...criptidos,
                imagen: ''
            }
        }
    });

    res.json(criptidos);
});


router.post('/contacto', async (req, res) => {
    const mail = {
        to: 'facuchena@hotmail.com',
        subject: 'Contacto web',
        html: `${req.body.nombre} se contacto a traves de la web y quiere mas informacion a este correo: ${req.body.email}
        <br> Ademas, hizo el siguiente comentario ${req.body.mensaje}
        <br> Su tel es: ${req.body.telefono}`
    }
    const transport = nodemailer.createTransport ({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS
        }
    }); //cierra transp
    
    await transport.sendMail(mail)

    res.status(201).json({
        error: false,
        message: 'Mensaje enviado'
    });
}); // cierrapost/api

module.exports = router;