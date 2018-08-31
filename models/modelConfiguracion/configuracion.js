const mongoose=require('mongoose');

const configuracionSchema=new mongoose.Schema({

  nombreTienda:String,
  nombreLegal:String,
  telefonoTienda:String,
  calleTienda:String,
  ciudadTienda:String,
  cpTienda:String,
  estadoTienda:String

});

const Configuracion=mongoose.model('configuracion',configuracionSchema);

module.exports.guardarConfiguracion=(configuracion,callback)=>{
  Configuracion.create(configuracion,callback);
};

module.exports.recuperarColeccionById=(configuracion,callback)=>{
  Configuracion.find(configuracion,callback);
};

module.exports.editarConfiguracion=(id,configuracion,callback)=>{
  Configuracion.findByIdAndUpdate(id,configuracion,callback);
};