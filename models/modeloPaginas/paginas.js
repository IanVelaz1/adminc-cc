const mongoose=require('mongoose');

const paginaSchema=new mongoose.Schema({
  
  pagina:{
    type:Object
  }

});

const Pagina=module.exports=mongoose.model('paginas',paginaSchema);


module.exports.guardarPagina=(pagina,callback)=>{
  Pagina.create(pagina,callback);
}

module.exports.recuperarPaginas=(pagina,callback)=>{
   Pagina.find(pagina,callback);
}

module.exports.recuperarPaginaById=(id,callback)=>{
   Pagina.findById(id,callback);
}

 module.exports.editarPagina=(id,pagina,callback)=>{
   Pagina.findByIdAndUpdate(id,pagina,callback);
 }

 module.exports.eliminarPagina=(id,callback)=>{
   Pagina.findByIdAndRemove(id,callback);
 }

 
