const mongoose=require('mongoose');

const productoSchema=new mongoose.Schema({
  
  codigoProd:String,
  nombreProd:String,
  descripcionProd:String,
  imagenesProd:Array,
  addedCart:Boolean,
  comentariosProd:Array,
  skuProd:String,
  invProd:Boolean,
  existenciasProd:Number,
  pesoProd:Number,
  unidadPesoProd:String,
  permitirCompraSinInv:Boolean,
  compararPrecioProd:Number,
  precioVentaProd:Number,
  proveedoresProd:Array,
  cantidadCarrito:{type:Number,default:1},
  tagsProd:Array,
  coleccionesProd:Array,
  tienePromocionesProd:Boolean,
  promocionProd:String,
  tipoProducto:String,
  cobrarImpuestosProd:Boolean,
  requiereEnvio:Boolean
});


const Producto=module.exports=mongoose.model('productos',productoSchema);


module.exports.guardarProducto=(producto,callback)=>{
   
  Producto.create(producto,callback);

}

module.exports.recuperarProductos=(producto,callback)=>{
  Producto.find(producto,callback);
}

module.exports.recuperarProductoById=(id,callback)=>{
  Producto.findById(id,callback);
}

module.exports.editarProducto=(id,producto,callback)=>{
  Producto.findByIdAndUpdate(id,producto,callback);
}

module.exports.findProductoBusqueda=(producto,callback)=>{
  Producto.find({nombreProd:{'$regex':producto}},callback);
}

module.exports.eliminarProducto=(id,callback)=>{
  Producto.findByIdAndRemove(id,callback);
}