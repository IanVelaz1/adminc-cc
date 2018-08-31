const Tipo=require('../../models/modelTipo/tipoProducto');

module.exports=(app)=>{
  app.post('/tipo',(req,res)=>{
    const tipo=req.body;
   Tipo.guardarTipo(tipo,(error,tipo)=>{
      if(error){
        res.json({error:error,success:false,msg:"error al guardar tipo"});
      }
      else{
        res.json({success:true,tipo});
      }
   });
  });

  app.get('/tipo',(req,res)=>{
   Tipo.recuperarTipos({},(error,tipos)=>{
    if(error){
      res.json({error:error,success:false,msg:"error al recuperar tipo"});
    }
    else{
      res.json({success:true,tipos});
    }
   })
  });

  app.get('/tipo/:id',(req,res)=>{
    const tipo=req.params.id;
    Tipo.recuperarTipo(tipo,(error,tipo)=>{
      if(error){
        res.json({error:error,success:false,msg:"error al recuperar tipo"});
      }
      else{
        res.json({success:true,tipo});
      }
    });
  });

  app.delete('/tipo/:id',(req,res)=>{
     const id=req.params.id;
     Tipo.eliminarTipo(id,(error,tipo)=>{
      if(error){
        res.json({error:error,success:false,msg:"error al eliminar tipo"});
      }
      else{
        res.json({success:true,tipo});
      }
     });
  });
}