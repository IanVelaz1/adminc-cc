const Envio=require('../../models/modelEnvios/modelEnvios');

module.exports=(app)=>{

  app.get('/envios',(req,res)=>{
    Envio.recuperarEnvios({},(error,envios)=>{
       if(error){
         res.json({error:error,msg:"error al recuperar envios",success:false});
       }else{
         res.json({success:true,envios});
       }
    });
  });

  app.post('/envios',(req,res)=>{
    const objEnvio=req.body;
    Envio.guardarEnvio(objEnvio,(error,envio)=>{
      if(error){
        res.json({error:error,msg:"error al guardar envio",success:false});
      }else{
        res.json({success:true,envio});
      }
    });
  });

  app.get('/envios/:id',(req,res)=>{
    const id=req.params.id;
    Envio.recuperarEnvioById(id,(error,envio)=>{
      if(error){
        res.json({error:error,msg:"error al recuperar envio",success:false});
      }else{
        res.json({success:true,envio});
      }
    });
  });

  app.put('/envios/:id',(req,res)=>{
    const id=req.params.id;
    const objEnvio=req.body;
    Envio.editarEnvio(id,objEnvio,(error,envio)=>{
      if(error){
        res.json({error:error,msg:"error al editar envio",success:false});
      }else{
        res.json({success:true,envio});
      }
    });
  });

  app.delete('/envios/:id',(req,res)=>{
    const id=req.params.id;
    Envio.eliminarEnvio(id,(error,envio)=>{
      if(error){
        res.json({error:error,msg:"error al editar envio",success:false});
      }else{
        res.json({success:true,envio});
      }
    });
  });

  

}