const Proveedor=require('../../models/modeloProveedor/proveedor');

module.exports=(app)=>{
  
  app.post('/proveedor',(req,res)=>{
    const proveedor=req.body;
    Proveedor.guardarProveedor(proveedor,(error,proveedor)=>{
      if(error){
        res.json({error:error,success:false,msg:"error al guardar proveedor"});
      }else{
        res.json({success:true,proveedor});
      }
    });
  });

  app.get('/proveedor',(req,res)=>{
    Proveedor.recuperarProveedores({},(error,proveedores)=>{
      if(error){
        res.json({error:error,success:false,msg:"error al recuperar proveedores"});
      }else{
        res.json({success:true,proveedores});
      }
    });
  });

  app.get('/proveedor/:id',(req,res)=>{
    const id=req.params.id;
    Proveedor.recuperarProveedorById(id,(error,proveedor)=>{
      if(error){
        res.json({error:error,success:false,msg:"error al recuperar proveedor"});
      }else{
        res.json({success:true,proveedor});
      }
    });
  });

  app.put('/proveedor/:id',(req,res)=>{
    const id=req.params.id;
    const proveedor=req.body;
    Proveedor.editarProveedor(id,proveedor,(error,proveedor)=>{
      if(error){
        res.json({error:error,success:false,msg:"error al editar proveedor"});
      }else{
        res.json({success:true,proveedor});
      }
    });
  });

  app.delete('/proveedor/:id',(req,res)=>{
     const id=req.params.id;
     Proveedor.eliminarProveedor(id,(error,proveedor)=>{
      if(error){
        res.json({error:error,success:false,msg:"error al eliminar proveedor"});
      }else{
        res.json({success:true,proveedor});
      }
     });
  });

}