const mongoose=require('mongoose');

const comentarioSchema=new mongoose.Schema({
 
  nombreComent:String,
  mailComent:String,
  comentario:String,
  fechaComent:Date

});

const Comentario=module.exports=mongoose.model('comentario',comentarioSchema);

module.exports.guardarComentario=(comentario,callback)=>{
  Comentario.create(comentario,callback);
}

module.exports.recuperarComentarios=(comentario,callback)=>{
  Comentario.find(comentario,callback);
}

module.exports.recuperarComentarioById=(id,callback)=>{
  Comentario.findById(id,callback);
}

module.exports.editarComentario=(id,comentario,callback)=>{
  Comentario.findByIdAndUpdate(id,comentario,callback);
}

module.exports.eliminarComentario=(id,callback)=>{
  Comentario.findByIdAndRemove(id,callback);
}