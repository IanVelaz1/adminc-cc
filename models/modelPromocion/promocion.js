const mongoose=require('mongoose');

const promocionSchema=new mongoose.Schema({

nombreProm:String,
descripcionProm:String,
productosProm:[],
precioProm:Number,
usosLimiteProm:Number,
fechasProm:Array

});

const Promocion=module.exports=mongoose.model('promocion',promocionSchema);

module.exports.guardarPromocion=(promocion,callback)=>{
    Promocion.create(promocion,callback);
}

module.exports.recuperarPromociones=(promocion,callback)=>{
  Promocion.find(promocion,callback);
}

module.exports.recuperarPromocionById=(id,callback)=>{
  Promocion.findById(id,callback);
}

module.exports.editarPromocion=(id,promocion,callback)=>{
  Promocion.findByIdAndUpdate(id,promocion,callback);
}

module.exports.eliminarPromocion=(id,callback)=>{
  Promocion.findByIdAndRemove(id,callback);
}