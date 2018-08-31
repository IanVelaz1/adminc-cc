const Tag=require('../../models/modelTags/tag');

module.exports=(app)=>{
  app.post('/tag',(req,res)=>{
    const tag=req.body;
    Tag.guardarTag(tag,(error,tag)=>{
      if(error){
        res.json({error:error,msg:"error al guardar tag",success:false});
      }else{
        res.json({success:true,tag});
      }
    });
  });

  app.get('/tag',(req,res)=>{
     Tag.recuperarTags({},(error,tags)=>{
      if(error){
        res.json({error:error,msg:"error al recuperar tag",success:false});
      }else{
        res.json({success:true,tags});
      }
     });
  }); 

  app.get('/tag/:id',(req,res)=>{
   const id=req.params.id;
   Tag.recuperarTagEspecifica(id,(error,tag)=>{
    if(error){
      res.json({error:error,msg:"error al recuperar tag",success:false});
    }else{
      res.json({success:true,tag});
    }
   });
  })

  app.delete('/tag/:id',(req,res)=>{
    const id=req.params.id; 
Tag.eliminarTag(id,(error,tag)=>{
  if(error){
    res.json({error:error,msg:"error al recuperar tag",success:false});
  }else{
    res.json({success:true,tag});
  }
});
  });
}