var express = require('express');
var router = express.Router();
var criptidosModel = require('../../models/criptidosModel');
var util = require('util');
var cloudinary = require('cloudinary').v2;
const uploader = util.promisify(cloudinary.uploader.upload);
const destroy = util.promisify(cloudinary.uploader.destroy);


/* para listar los criptidos */
router.get('/', async function (req, res, next) {

var criptidos = await criptidosModel.getCriptidos();

criptidos = criptidos.map(criptido => {
  if (criptido.img_id) {
    const imagen = cloudinary.image(criptido.img_id, {
      width: 100,
      height: 100,
      crop: 'fill'
    });
    return {
      ...criptido,
      imagen
    }
  } else {
    return {
      ...criptido,
      imagen: ''
    }
  }
});

  res.render('admin/criptidos', {
    layout: 'admin/layout',
    persona: req.session.nombre,
    criptidos
  });
});

router.get('/agregar', (req, res, next) => {
  res.render('admin/agregar', {
    layout: 'admin/layout'
  }) // cierra render
}) // cierra Get

// agregar criptidos

router.post('/agregar', async (req, res, next) => {
  try {

    var img_id = '';
    if (req.files && Object.keys(req.files).length > 0) {
      imagen = req.files.imagen;
      img_id = (await uploader(imagen.tempFilePath)).public_id;
    }



    if (req.body.nombre != "" && req.body.clase != "" && req.body.estado != "") {
      await criptidosModel.insertCriptido({
        ...req.body, // spread > nombre, clase, estado
        img_id
      });
      res.redirect('/admin/criptidos')
    } else {
      res.render('admin/agregar', {
        layout: 'admin/layout',
        error: true,
        message: 'Todos los campos son requeridos'
      })
    }
  } catch (error) {
    console.log(error)
    res.render('admin/agregar', {
      layout: 'admin/layout',
      error: true,
      message: 'Criptido no añadido'
    })
  }
})

// eliminar criptidos
router.get('/eliminar/:id', async (req, res, next) => {
  var id = req.params.id;

  let criptido = await criptidosModel.getCriptidoById(id);
  if (criptido.img_id) {
    await (destroy(criptido.img_id));
  }

  await criptidosModel.deleteCriptidoById(id);
  res.redirect('/admin/criptidos');

}); // cierra get de eliminar

// vista del form de modificar
router.get('/modificar/:id', async (req, res, next) => {
  var id = req.params.id;
  console.log(req.params.id);
  var criptido = await criptidosModel.getCriptidoById(id);

  console.log(req.params.id);
  res.render('admin/modificar', {
    layout: 'admin/layout',
    criptido
  })
  
});

// para modificar el criptido
router.post('/modificar', async (req, res, next) => {
  try {

    let img_id = req.body.img_original;
    let borrar_img_vieja = false;
    if (req.body.img_delete === "1") {
      img_id = null;
      borrar_img_vieja = true;
    } else {
      if (req.files && Object.keys(req.files).length > 0) {
        imagen = req.files.imagen;
        img_id = (await uploader(imagen.tempFilePath)).public_id;
        borrar_img_vieja = true;
      }
    }
    if (borrar_img_vieja && req.body.img_original) {
      await (destroy(req.body.img_original));
    }

    var obj = {
      nombre: req.body.nombre,
      clase: req.body.clase,
      estado: req.body.estado,
      img_id
    }
    console.log(obj)
    console.log(req.body.id)

    await criptidosModel.modificarCriptidoById(obj, req.body.id);
    res.redirect('/admin/criptidos');

  } catch (error) {
    console.log(error)
    res.render('admin/modificar', {
      layout: 'admin/layout',
      error: true,
      message: 'No se modifico el criptido'
    })
  }
})


module.exports = router;