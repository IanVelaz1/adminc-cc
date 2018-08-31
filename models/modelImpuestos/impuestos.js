const mongoose=require('mongoose');

const impuestoSchema=new mongoose.Schema({
  
 tasaImpuesto:Number,
 impuestosIncluidos:Boolean

});

const Impuesto=mongoose.model('impuestos',impuestoSchema);

module.exports.guardarImpuestos=(impuesto,callback)=>{
  Impuesto.create(impuesto,callback);
}

module.exports.recuperarImpuestos=(impuesto,callback)=>{
  Impuesto.find(impuesto,callback);
}

module.exports.editarImpuestos=(id,impuesto,callback)=>{
  Impuesto.findByIdAndUpdate(id,impuesto,callback);
}