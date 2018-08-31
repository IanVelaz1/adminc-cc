const Impuesto=require('../../models/modelImpuestos/impuestos');

module.exports=(app)=>{

  app.post('/impuesto',(req,res)=>{
    const impuesto=req.body;
    Impuesto.guardarImpuestos(impuesto,(error,impuesto)=>{
       if(error){
         res.json({error:error,msg:"error al guardar impuesto",success:false});
       }else{
         res.json({success:true,impuesto});
       }
    });
  });

  app.get('/impuesto',(req,res)=>{
    Impuesto.recuperarImpuestos({},(error,impuesto)=>{
      if(error){
        res.json({error:error,msg:"error al recuperar impuesto",success:false});
      }else{
        res.json({success:true,impuesto});
      }
    });
  }); 

  app.put('/impuesto/:id',(req,res)=>{
    const id=req.params.id;
    const impuesto=req.body;

    Impuesto.editarImpuestos(id,impuesto,(error,impuesto)=>{
      if(error){
        res.json({error:error,msg:"error al editar impuesto",success:false});
      }else{
        res.json({success:true,impuesto});
      }
    });
  });

}