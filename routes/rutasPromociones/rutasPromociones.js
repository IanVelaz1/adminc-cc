const Promocion=require('../../models/modelPromocion/promocion');

module.exports=(app)=>{
  
  app.post('/promocion',(req,res)=>{
     const promocion=req.body;
     Promocion.guardarPromocion(promocion,(error,promocion)=>{
        if(error){
          res.json({error:error,success:false,msg:"error al guardar promocion"});
        }else{
          res.json({success:true,promocion});
        }
     });
  });
  
  app.get('/promocion',(req,res)=>{
     Promocion.recuperarPromociones({},(error,promociones)=>{
      if(error){
        res.json({error:error,success:false,msg:"error al recuperar promociones"});
      }else{
        res.json({success:true,promociones});
      }
     });
  });

  app.get('/promocion/:id',(req,res)=>{
    const id=req.params.id;
     Promocion.recuperarPromocionById(id,(error,promocion)=>{
      if(error){
        res.json({error:error,success:false,msg:"error al recuperar promocion especifico"});
      }else{
        res.json({success:true,promocion});
      }
     });
  });

  app.get('/promocion/es/:nombre',(req,res)=>{
    let nombre=req.params.nombre;
    Promocion.recuperarPromocionByNombre(nombre,(error,promocion)=>{
      if(error){
        res.json({error:error,success:false,msg:"error al recuperar promocion especifico"});
      }else{
        res.json({success:true,promocion});
      }
    });
  });

  app.put('/promocion/:id',(req,res)=>{
    const id=req.params.id;
    const promocion=req.body;

    Promocion.editarPromocion(id,promocion,(error,prom)=>{
      if(error){
        res.json({error:error,success:false,msg:"error al editar promocion"});
      }else{
        res.json({success:true,prom});
      }
    });
  });

  app.delete('/promocion/:id',(req,res)=>{
   const id=req.params.id;
   Promocion.eliminarPromocion(id,(error,promocion)=>{
    if(error){
      res.json({error:error,success:false,msg:"error al eliminar promocion"});
    }else{
      res.json({success:true,promocion});
    }
   });
  });
}