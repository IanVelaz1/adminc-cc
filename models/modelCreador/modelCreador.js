let mongoose=require('mongoose');

let creadorSchema=mongoose.Schema({

 nombrePaso:String,
 productosPaso:Array,
 requiredPaso:Boolean

});

let Creador=mongoose.model('creador',creadorSchema);

module.exports.guardarCreador=(creador,callback)=>{
  Creador.create(creador,callback);
}

module.exports.editarCreador=(id,creador,callback)=>{
  Creador.findByIdAndUpdate(id,creador,callback);
}

module.exports.findCreador=(creador,callback)=>{
  Creador.find(creador,callback);
}