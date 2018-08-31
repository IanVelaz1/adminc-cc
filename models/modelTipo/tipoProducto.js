const mongoose = require('mongoose');

const tipoSchema=new mongoose.Schema({
 
  tipo:String,
  productos:Array
  
});

const Tipo=module.exports=mongoose.model('tipos',tipoSchema);

module.exports.guardarTipo=(tipo,callback)=>{
  Tipo.create(tipo,callback);
}

module.exports.recuperarTipos=(tipo,calllback)=>{
  Tipo.find(tipo,calllback)
}

module.exports.recuperarTipo=(id,callback)=>{
  Tipo.findById(id,callback);
}

module.exports.eliminarTipo=(id,callback)=>{
  Tipo.findByIdAndRemove(id,callback)
}