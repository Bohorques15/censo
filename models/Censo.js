var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Censo = new Schema({
  cedula: { type: String },
  genero: { type: String },
  fecha_nacimiento: { type: String },
  edad: { type: String },
  pais: { type: String },
  estado_nacimiento: { type: String },
  ciudad_nacimiento: { type: String },
  profesion: { type: String },
  estado_civil: { type: String },
  trabaja: { type: String },
  vive_padres: { type: String },
  tiene_hermanos: { type: String },
  cantidad_hermanos: { type: String },
},{
    collection: 'censos'
});

module.exports = mongoose.model('Censo', Censo);
