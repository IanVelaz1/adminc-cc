let mongoose=require('mongoose');

let contactoSchema=mongoose.Schema({

nombreContacto:{
 type:String,
 default:""
},
mailContacto:{
  type:String,
  default:""
},
asuntoContacto:{
  type:String,
  default:""
}

});

let Contacto=module.exports=mongoose.model('contacto',contactoSchema);

module.exports.guardarContacto=(contacto,callback)=>{
  Contacto.create(contacto,callback);
}

module.exports.recuperarContactos=(contacto,callback)=>{
  Contacto.find(contacto,callback);
}

module.exports.recuperarContactoById=(id,callback)=>{
  Contacto.findById(id,callback);
}

module.exports.editarContacto=(id,contacto,callback)=>{
  Contacto.findByIdAndUpdate(id,contacto,callback);
}

module.exports.eliminarContacto=(id,callback)=>{
  Contacto.findByIdAndRemove(id,callback);
}