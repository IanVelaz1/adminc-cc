const Venta=require('../../models/modelVentas/ventas');

module.exports=(app)=>{
  app.post('/venta',(req,res)=>{
    const venta=req.body;
    Venta.guardarVenta(venta,(error,venta)=>{
       if(error){
         res.json({error:error,success:false,msg:"error al guardar venta"});
       }else{
        res.json({success:true,venta});
       }
    });
  });

  app.get('/venta',(req,res)=>{
    Venta.recuperarVentas({},(error,ventas)=>{
      if(error){
        res.json({error:error,success:false,msg:"error al recuperar ventas"});
      }else{
       res.json({success:true,ventas});
      }
    });
  });

  app.get('/venta/:id',(req,res)=>{
     const id=req.params.id;
     Venta.recuperarVentaById(id,(error,venta)=>{
      if(error){
        res.json({error:error,success:false,msg:"error al recuperar venta"});
      }else{
       res.json({success:true,venta});
      }
     });
  });

  app.put('/venta/:id',(req,res)=>{
    const id=req.params.id;
    const venta=req.body;
    Venta.editarVenta(id,venta,(error,venta)=>{
      if(error){
        res.json({error:error,success:false,msg:"error al editar venta"});
      }else{
       res.json({success:true,venta});
      }
    });
  });

  app.delete('/venta/:id',(req,res)=>{
     const id=req.params.id;
     Venta.eliminarVenta(id,(error,venta)=>{
      if(error){
        res.json({error:error,success:false,msg:"error al eliminar venta"});
      }else{
       res.json({success:true,venta});
      }
     })
  });
}