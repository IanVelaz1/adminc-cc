const mongoose=require('mongoose');

const visitasSchema=new mongoose.Schema({
  fechaVisita:String,
  paginaVisita:String,
  objetoPagina:{
    type:Object,
    default:{}
  },
  location:{
    type:Object,
    default:{}
  }
});

const VisitaDiaria=module.exports=mongoose.model('VisitaDiaria',visitasSchema);

 module.exports.guardarVisitas=(visita,callback)=>{
   VisitaDiaria.create(visita,callback);
 }

 module.exports.recuperarVisitas=(visita,callback)=>{
   VisitaDiaria.find(visita,callback);
 }

 module.exports.recuperarVisitasDiarias=(fecha,callback)=>{
   VisitaDiaria.find({fechaVisita:fecha},callback);
 }

