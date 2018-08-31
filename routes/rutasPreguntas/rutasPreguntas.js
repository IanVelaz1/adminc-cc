const Pregunta=require('../../models/modelPreguntas/pregunta');

module.exports=(app)=>{
  
  app.post('/pregunta',(req,res)=>{
    const pregunta=req.body;
     Pregunta.guardarPregunta(pregunta,(error,pregunta)=>{
        if(error){
          res.json({error:error,success:false,msg:"error al guardar pregunta"});
        }else{
          res.json({success:true,pregunta});
        }
     });
  });

  app.get('/pregunta',(req,res)=>{
    Pregunta.recuperarPreguntas({},(error,pregunta)=>{
      if(error){
        res.json({error:error,success:false,msg:"error al recuperar preguntas"});
      }else{
        res.json({success:true,pregunta});
      }
    });
  });

  app.get('/pregunta/:id',(req,res)=>{
    const id=req.params.id;
    Pregunta.recuperarPreguntaById(id,(error,pregunta)=>{
      if(error){
        res.json({error:error,success:false,msg:"error al recuperar pregunta especifica"});
      }else{
        res.json({success:true,pregunta});
      }
    });
  });

  app.put('/pregunta/:id',(req,res)=>{
    const pregunta=req.body;
    const id=req.params.id;
    Pregunta.editarPregunta(id,pregunta,(error,pregunta)=>{
      if(error){
        res.json({error:error,success:false,msg:"error al editar pregunta especifica"});
      }else{
        res.json({success:true,pregunta});
      }
    });
  });

}