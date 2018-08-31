const Respuesta=require('../../models/modelRespuesta/respuesta');

module.exports=(app)=>{

  app.get('/respuesta',(req,res)=>{
    Respuesta.recuperarRespuestas({},(error,respuestas)=>{
      if(error){
        res.json({error:error,msg:"no se pudo recuperar respuestas",success:false});
      }else{
        res.json({success:true,respuestas});
      }
    });
  });

  app.post('/respuesta',(req,res)=>{
   const respuesta=req.body;
    Respuesta.guardarRespuesta(respuesta,(error,respuestas)=>{
      if(error){
        res.json({error:error,msg:"no se pudo guardar respuesta",success:false});
      }else{
        res.json({success:true,respuestas});
      }
    });
  });

  app.get('/respuesta/:id',(req,res)=>{
     const id=req.params.id;
     Respuesta.recuperarRespuestaById(id,(error,respuesta)=>{
      if(error){
        res.json({error:error,msg:"no se pudo recuperar respuesta",success:false});
      }else{
        res.json({success:true,respuesta});
      }
     });
  });

  app.put('/respuesta/:id',(req,res)=>{
    const id=req.params.id;
    const respuesta=req.body;
    Respuesta.editarRespuesta(id,respuesta,(error,respuesta)=>{
      if(error){
        res.json({error:error,msg:"no se pudo editar respuesta",success:false});
      }else{
        res.json({success:true,respuesta});
      }
    });
  });

  

}