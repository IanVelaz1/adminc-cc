let mongoose=require('mongoose');

let newsSchema=mongoose.Schema({
 mail:String
});

let Newsletter=module.exports=mongoose.model('newsletter',newsSchema);

module.exports.guardarNews=(news,callback)=>{
  Newsletter.create(news,callback);
}

module.exports.recuperarNews=(news,callback)=>{
  Newsletter.find(news,callback);
}

module.exports.editarNews=(id,news,callback)=>{
  Newsletter.findByIdAndUpdate(id,news,callback);
}

module.exports.eliminarNews=(id,callback)=>{
  Newsletter.findByIdAndRemove(id,callback);
}