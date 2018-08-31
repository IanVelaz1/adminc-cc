const mongoose=require ('mongoose');

const imagenSchema=new mongoose.Schema({
   
  img:{
   data:Buffer,
   contentType:String,
   originalName:String,
   uploadedTime:Date,
   size:Number
  },
  
  
  


});

const Imagen=module.exports=mongoose.model('imagenesProductos',imagenSchema);

module.exports.guardarImagen=(img,callback)=>{

  Imagen.create(img,callback);

}

module.exports.recuperarImagenes=(img,callback)=>{
   Imagen.find(img,callback);
}

module.exports.recuperarImagenesId=(id,callback)=>{
  Imagen.findById(id,callback);
}