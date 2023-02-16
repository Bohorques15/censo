const censoRoutes = require('express').Router();

// Require censo model in our routes module
var Censo = require('../models/Censo');

// Defined store route
censoRoutes.route('/add').post((req, res, next) => {
	var censo = new Censo();
  censo.cedula = req.body.cedula; 
	censo.genero = req.body.genero;
	censo.fecha_nacimiento = req.body.fecha_nacimiento;
	censo.edad = req.body.edad;
	censo.pais = req.body.pais;
	censo.estado_nacimiento = req.body.estado_nacimiento;
	censo.ciudad_nacimiento = req.body.ciudad_nacimiento;
	censo.profesion = req.body.profesion;
	censo.estado_civil = req.body.estado_civil;
	censo.trabaja = req.body.trabaja;
	censo.vive_padres = req.body.vive_padres;
	censo.tiene_hermanos = req.body.tiene_hermanos;
	censo.cantidad_hermanos = req.body.cantidad_hermanos;
  censo.save()
	.then(censo => {
	  res.status(200).json({'censo': 'censo agregado satisfactoriamente'});
	})
	.catch(err => {
	  res.status(400).send("imposible de guardar en la base de datos");
	});
});

// Defined get data(index or listing) route
censoRoutes.route('/').get(function (req, res) {
  Censo.find(function (err, censos){
	if(err){
	  console.log(err);
	}
	else {
	  res.json(censos);
	}
  });
});

// Defined edit route
censoRoutes.route('/edit/:id').get(function (req, res) {
  var id = req.params.id;
  Censo.findById(id, function (err, censo){
	  res.json(censo);
  });
});

// Defined get by ci route
censoRoutes.route('/get/:cedula').get(function (req, res) {
  var cedula = req.params.cedula;
  Censo.find({cedula: cedula}, function (err, censo){
	  	res.json(censo);
  });
});

//  Defined update route
censoRoutes.route('/update/:id').post(function (req, res) {
  Censo.findById(req.params.id, function(err, censo) {
	if (!censo)
	  return next(new Error('No se puede cargar el documento'));
	else {
	censo.cedula = req.body.cedula; 
  	censo.genero = req.body.genero;
  	censo.fecha_nacimiento = req.body.fecha_nacimiento;
  	censo.edad = req.body.edad;
  	censo.pais = req.body.pais;
  	censo.estado_nacimiento = req.body.estado_nacimiento;
  	censo.ciudad_nacimiento = req.body.ciudad_nacimiento;
  	censo.profesion = req.body.profesion;
  	censo.estado_civil = req.body.estado_civil;
  	censo.trabaja = req.body.trabaja;
  	censo.vive_padres = req.body.vive_padres;
  	censo.tiene_hermanos = req.body.tiene_hermanos;
  	censo.cantidad_hermanos = req.body.cantidad_hermanos;

	  censo.save().then(censo => {
		  res.json('Actualizacion completa');
	  })
	  .catch(err => {
			res.status(400).send("imposible de actualizar la base de datos");
	  });
	}
  });
});

// Defined delete | remove | destroy route
censoRoutes.route('/delete/:id').get(function (req, res) {
  Censo.findByIdAndRemove({_id: req.params.id}, function(err, censo){
		if(err) res.json(err);
		else res.json('Removido satisfactoriamente');
	});
});

module.exports = censoRoutes;
