const Configuracion=require('../../models/modelConfiguracion/configuracion');

module.exports=(app)=>{
  app.post('/configuracion',(req,res)=>{
     const configuracion=req.body;
      Configuracion.guardarConfiguracion(configuracion,(error,configuracion)=>{
         if(error){
           res.json({error:error,msg:"error al guardar configuracion",success:false});
         }else{
          res.json({success:true,configuracion});
         }
      });
  });

  app.get('/configuracion',(req,res)=>{
    const id=req.params.id;
    Configuracion.recuperarColeccionById({},(error,configuracion)=>{
      if(error){
        res.json({error:error,msg:"error al recuperar configuracion",success:false});
      }else{
       res.json({success:true,configuracion});
      }
    });
});

  app.put('/configuracion/:id',(req,res)=>{
      const id=req.params.id;
      const configuracion=req.body;
      Configuracion.editarConfiguracion(id,configuracion,(error,configuracion)=>{
        if(error){
          res.json({error:error,msg:"error al editar configuracion",success:false});
        }else{
         res.json({success:true,configuracion});
        }
      });
  });
}