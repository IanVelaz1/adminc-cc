const mongoose=require('mongoose');

const preguntaSchema=new mongoose.Schema({
 
  motivoPregunta:String,
  descripcionPregunta:String,
  fechaPregunta:Date,
  usuarioPregunta:String,
  respuestasPregunta:Array

});

const Pregunta = module.exports=mongoose.model('pregunta',preguntaSchema);

module.exports.guardarPregunta=(pregunta,callback)=>{
  Pregunta.create(pregunta,callback);
}

module.exports.recuperarPreguntas=(pregunta,callback)=>{
  Pregunta.find(pregunta,callback);
}

module.exports.recuperarPreguntaById=(id,callback)=>{
  Pregunta.findById(id,callback);
}

module.exports.editarPregunta=(id,pregunta,callback)=>{
  Pregunta.findByIdAndUpdate(id,pregunta,callback);
}