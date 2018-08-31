const mongoose=require('mongoose');

const proveedorSchema=new mongoose.Schema({

 nombreProv:String,
 descripcionProv:String,
 telefonosProv:String,
 productosProv:[]

});

const Proveedor=module.exports=mongoose.model('proveedor',proveedorSchema);

module.exports.guardarProveedor=(proveedor,callback)=>{
  Proveedor.create(proveedor,callback);
}

module.exports.recuperarProveedores=(proveedor,callback)=>{
  Proveedor.find(proveedor,callback);
}

module.exports.recuperarProveedorById=(id,callback)=>{
  Proveedor.findById(id,callback);
}

module.exports.editarProveedor=(id,proveedor,callback)=>{
  Proveedor.findByIdAndUpdate(id,proveedor,callback);
}

module.exports.eliminarProveedor=(id,callback)=>{
  Proveedor.findByIdAndRemove(id,callback);
}
