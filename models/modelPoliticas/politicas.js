const mongoose=require('mongoose');

const politicasSchema=new mongoose.Schema({
  politicaReembolso:String,
  politicaPrivacidad:String,
  terminosCondiciones:String
});

const Politica=mongoose.model('politicas',politicasSchema);

module.exports.guardarPoliticas=(politicas,callback)=>{
  Politica.create(politicas,callback);
}

module.exports.recuperarPoliticas=(politicas,callback)=>{
  Politica.find(politicas,callback);
}

module.exports.editarPoliticas=(id,politicas,callback)=>{
  Politica.findByIdAndUpdate(id,politicas,callback);
}

module.exports.eliminarPolitica=(id,callback)=>{
  Politica.findByIdAndRemove(id,callback);
}