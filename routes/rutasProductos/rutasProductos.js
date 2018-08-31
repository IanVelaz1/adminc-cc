const Producto=require('../../models/modelProducto/producto');

module.exports=(app)=>{
  
 app.post('/producto',(req,res)=>{
    const producto=req.body;
    Producto.guardarProducto(producto,(error,producto)=>{
       if(error){
         res.json({error:error,success:false,msg:"error al guardar producto"});
       }else{
         res.json({success:true,producto});
       }
    });
 });

 app.get('/producto',(req,res)=>{
    Producto.recuperarProductos({},(error,productos)=>{
      if(error){
        res.json({error:error,success:false,msg:"error al recuperar productos"});
      }else{
        res.json({success:true,productos});
      }
    });
 });

 app.get('/producto/:id',(req,res)=>{
   const id=req.params.id;
   Producto.recuperarProductoById(id,(error,producto)=>{
    if(error){
      res.json({error:error,success:false,msg:"error al recuperar producto"});
    }else{
      res.json({success:true,producto});
    }
   });
 });

 app.put('/producto/:id',(req,res)=>{
     const id=req.params.id; 
     const producto=req.body;
     Producto.editarProducto(id,producto,(error,producto)=>{
      if(error){
        res.json({error:error,success:false,msg:"error al editar producto"});
      }else{
        res.json({success:true,producto});
      }
     });
 });

 app.delete('/producto/:id',(req,res)=>{
   const id=req.params.id;
   Producto.eliminarProducto(id,(error,producto)=>{
    if(error){
      res.json({error:error,success:false,msg:"error al eliminar producto"});
    }else{
      res.json({success:true,producto});
    }
   });
 });



 app.get('/producto/buscar/:busqueda',(req,res)=>{

  let producto={
    _id:"",
  codigoProd:"",
  nombreProd:req.params.busqueda,
  descripcionProd:"",
  imagenesProd:[],
  addedCart:false,
  comentariosProd:[],
  skuProd:"",
  invProd:false,
  existenciasProd:0,
  pesoProd:0,
  unidadPesoProd:"",
  permitirCompraSinInv:false,
  compararPrecioProd:0,
  precioVentaProd:0,
  proveedoresProd:[],
  cantidadCarrito:0,
  tagsProd:[],
  coleccionesProd:[],
  tienePromocionesProd:false,
  promocionProd:"",
  tipoProducto:"",
  cobrarImpuestosProd:"",
  requiereEnvio:""
  }

   let busqueda=req.params.busqueda;
    Producto.findProductoBusqueda(busqueda,(error,producto)=>{
       if(error){
         res.json({error:error,success:false,msg:"error al buscar"});
       }else{
         res.json({success:true,producto});
       }
    });
 });

}