let Creador=require('../../models/modelCreador/modelCreador');

module.exports=(app)=>{

  app.get('/creador',(req,res)=>{
    Creador.findCreador({},(error,creador)=>{
      if(error){
        res.json({error:error,msg:"error al recuperar creador",success:false});
      }else{
        res.json({success:true,creador})
      }
    });
  });

  app.post('/creador',(req,res)=>{
    let objCreador=req.body;
    
    console.log(objCreador);
    Creador.guardarCreador(objCreador,(error,creador)=>{
      if(error){
        res.json({error:error,msg:"error al guardar creador",success:false});
      }else{
        res.json({success:true,creador})
      }
    });
  });

  app.put('/creador/:id',(req,res)=>{
    let objCreador=req.body;
    let id=req.params.id;
    Creador.editarCreador(id,objCreador,(error,creador)=>{
      if(error){
        res.json({error:error,msg:"error al editar creador",success:false});
      }else{
        res.json({success:true,creador})
      }
    });
  });

}