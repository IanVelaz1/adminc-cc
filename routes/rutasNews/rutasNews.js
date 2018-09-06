let Newsletter=require('../../models/modelNewsletter/modelNewsletter');

module.exports=(app)=>{
 
  app.get('/newsletter',(req,res)=>{
    
    Newsletter.recuperarNews({},(error,news)=>{
       if(error){
         res.json({error:error,success:false,msg:"error al recuperar Newsletter"});
       }else{
         res.json({success:true,news});
       }
    });
  });

  app.post('/newsletter',(req,res)=>{
    let newsletter=req.body;
    Newsletter.guardarNews(newsletter,(error,news)=>{
      if(error){
        res.json({error:error,success:false,msg:"error al guardar Newsletter"});
      }else{
        res.json({success:true,news});
      }
    });
  });

  app.put('/newsletter/:id',(req,res)=>{
    let id=req.params.id;
    let newsletter=req.body;
    Newsletter.editarNews(id,newsletter,(error,news)=>{
      if(error){
        res.json({error:error,success:false,msg:"error al editar Newsletter"});
      }else{
        res.json({success:true,news});
      }
    });
  });

  app.delete('/newsletter/:id',(req,res)=>{
    let id=req.params.id;
    Newsletter.eliminarNews(id,(error,news)=>{
      if(error){
        res.json({error:error,success:false,msg:"error al eliminar Newsletter"});
      }else{
        res.json({success:true,news});
      }
    });
  });

}