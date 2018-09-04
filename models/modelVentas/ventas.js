const mongoose=require('mongoose');

const ventasSchema=new mongoose.Schema({

 cliente_venta:Object,
 productos_venta:Array,
 fecha_venta:Date,
 total_venta:Number,
 estado_venta:String,
 envio_comp:Object,
 guia_pedido:String

});

const Venta=module.exports=mongoose.model('ventas',ventasSchema);

module.exports.guardarVenta=(venta,callback)=>{
  Venta.create(venta,callback);
}

module.exports.recuperarVentas=(venta,callback)=>{
  Venta.find(venta,callback);
}

module.exports.recuperarVentaById=(id,callback)=>{
  Venta.findById(id,callback);
}

module.exports.editarVenta=(id,venta,callback)=>{
  Venta.findByIdAndUpdate(id,venta,callback);
}

module.exports.eliminarVenta=(id,callback)=>{
  Venta.findByIdAndRemove(id,callback);
}