const mongoose=require('mongoose');

const respuestaSchema=new mongoose.Schema({
 
  respuestaUsuario:String,
  idPregunta:String,
  fechaRespuesta:Date,
  usuarioRespuesta:String

});


const Respuesta=module.exports=mongoose.model('respuestas',respuestaSchema);


module.exports.guardarRespuesta=(respuesta,callback)=>{
  Respuesta.create(respuesta,callback);
};

module.exports.recuperarRespuestas=(respuesta,callback)=>{
  Respuesta.find(respuesta,callback);
}

module.exports.recuperarRespuestaById=(id,callback)=>{
  Respuesta.findByIdAndUpdate(id,callback);
}

module.exports.editarRespuesta=(id,respuesta,callback)=>{
  Respuesta.findByIdAndUpdate(id,respuesta,callback);
}

module.exports.eliminarRespuesta=(id,callback)=>{
  Respuesta.findByIdAndRemove(id,callback);
}