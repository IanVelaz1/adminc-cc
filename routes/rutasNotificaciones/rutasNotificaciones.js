const Notificaciones=require('../../models/modelsNotificaciones/modelNotificaciones');

module.exports=(app)=>{
  
  app.get('/notificaciones',(req,res)=>{
    Notificaciones.recuperarNotificaciones({},(error,notificacion)=>{
      if(error){
        res.json({error:error,msg:"error al recuperar notifiaciones ",success:false});
      }else{
        res.json({success:true,notificacion})
      }
    });
  });

  app.post('/notificaciones',(req,res)=>{
    const notificacion=req.body;
    Notificaciones.guardarNotificacion(notificacion,(error,notificacion)=>{
      if(error){
        res.json({error:error,msg:"error al guardar notifiaciones ",success:false});
      }else{
        res.json({success:true,notificacion})
      }
    });
  });

  app.put('/notificaciones/:id',(req,res)=>{
    const id=req.params.id;
    const notificacion=req.body;
    Notificaciones.editarNotificacion(id,notificacion,(error,notificacion)=>{
      if(error){
        res.json({error:error,msg:"error al editar notifiacion",success:false});
      }else{
        res.json({success:true,notificacion})
      }
    });
  });

}