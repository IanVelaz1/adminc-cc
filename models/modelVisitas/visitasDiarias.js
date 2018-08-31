const mongoose=require('mongoose');

const visitasSchema=new mongoose.Schema({
  fechaVisita:Date
});

const VisitaDiaria=module.exports=mongoose.model('VisitaDiaria',visitasSchema);

 module.exports.guardarVisitas=(visita,callback)=>{
   VisitaDiaria.create(visita,callback);
 }

 module.exports.recuperarVisitas=(visita,callback)=>{
   VisitaDiaria.find(visita,callback);
 }

