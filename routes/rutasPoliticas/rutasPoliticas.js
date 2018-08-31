const Politica=require('../../models/modelPoliticas/politicas');

module.exports=(app)=>{

  app.get('/politicas',(req,res)=>{
    Politica.recuperarPoliticas({},(error,politica)=>{
      if(error){
         res.json({error:error,msg:"error al recuperar politicas",success:false});
      }else{
         res.json({success:true,politica});
      }
    });
  });

  app.post('/politicas',(req,res)=>{
    const objPolitica=req.body;
     Politica.guardarPoliticas(objPolitica,(error,politica)=>{
      if(error){
        res.json({error:error,msg:"error al guardar politicas",success:false});
     }else{
        res.json({success:true,politica});
     }
     });
  });

  app.put('/politicas/:id',(req,res)=>{
    const id=req.params.id;
    const objPolitica=req.body;
    Politica.editarPoliticas(id,objPolitica,(error,politica)=>{
      if(error){
        res.json({error:error,msg:"error al editar politicas",success:false});
     }else{
        res.json({success:true,politica});
     }
    });
  });

}