const mongoose=require('mongoose');

const coleccionSchema=new mongoose.Schema({

  nombreCol:String,
  imagenCol:{
    type:Object,
    default:{},
    required:false
  },
  descripcionCol:String,
  productosCol:[]

});

const Coleccion=module.exports=mongoose.model('coleccion',coleccionSchema);

module.exports.guardarColeccion=(coleccion,callback)=>{
  Coleccion.create(coleccion,callback);
}

module.exports.recuperarColecciones=(coleccion,callback)=>{
  Coleccion.find(coleccion,callback);
}

module.exports.recuperarColeccionById=(id,callback)=>{
  Coleccion.findById(id,callback);
}

module.exports.editarColeccion=(id,coleccion,callback)=>{
  Coleccion.findByIdAndUpdate(id,coleccion,callback);
}

module.exports.eliminarColeccion=(id,callback)=>{
  Coleccion.findByIdAndRemove(id,callback);
}





