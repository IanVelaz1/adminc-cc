const mongoose=require('mongoose');

const tagSchema=new mongoose.Schema({
   nombreTag:String
});

const Tag=module.exports=mongoose.model('tag',tagSchema);

module.exports.guardarTag=(tag,callback)=>{
  Tag.create(tag,callback);
};

module.exports.recuperarTagEspecifica=(id,callback)=>{
  Tag.findById(id,callback);
}

module.exports.recuperarTags=(tag,callback)=>{
  Tag.find(tag,callback);
}

module.exports.eliminarTag=(id,callback)=>{
  Tag.findByIdAndRemove(id,callback);
}