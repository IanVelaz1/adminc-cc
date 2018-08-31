const Comentario=require('../../models/modelComentarios/comentarios');

module.exports=(app)=>{
  app.post('/comentario',(req,res)=>{
    const comentario=req.body;
    Comentario.guardarComentario(comentario,(error,comentario)=>{
       if(error){
        res.json({success:false,error:error,msg:"error al guardar comentario"});
       }else{
        res.json({success:true,comentario});
       }
    });
  });

  app.get('/comentario',(req,res)=>{
    Comentario.recuperarComentarios({},(error,comentarios)=>{
      if(error){
        res.json({success:false,error:error,msg:"error al recuperar comentarios"});
       }else{
        res.json({success:true,comentarios});
       }
    });
  });

  app.get('/comentario/:id',(req,res)=>{
     const id=req.params.id;
     Comentario.recuperarComentarioById(id,(error,comentario)=>{
      if(error){
        res.json({success:false,error:error,msg:"error al recuperar comentario especifico"});
       }else{
        res.json({success:true,comentario});
       }
     });
  });

  app.put('/comentario/:id',(req,res)=>{
    const id=req.params.id;
    const comentario=req.body;
    Comentario.editarComentario(id,comentario,(error,comentario)=>{
      if(error){
        res.json({success:false,error:error,msg:"error al editar comentario"});
       }else{
        res.json({success:true,comentario});
       }
    });

  });

  app.delete('/comentario/:id',(req,res)=>{
    const id=req.params.id;
    Comentario.eliminarComentario(id,(error,comentario)=>{
      if(error){
        res.json({success:false,error:error,msg:"error al eliminar comentario"});
       }else{
        res.json({success:true,comentario});
       }
    });
  });

  
}