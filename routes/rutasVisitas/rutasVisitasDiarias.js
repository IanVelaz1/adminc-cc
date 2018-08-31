const VisitaDiaria=require('../../models/modelVisitas/visitasDiarias');

module.exports=(app)=>{

  app.post('/visitas',(req,res)=>{
    const vi=req.body;
    VisitaDiaria.guardarVisitas(vi,(error,visita)=>{
        if(error){
          res.json({error:error,msg:"error al guardar visita"});
        }else{
          res.json({visita});
        }
    });
  });

  app.get('/visitas',(req,res)=>{
    VisitaDiaria.recuperarVisitas({},(error,visitas)=>{
      if(error){
        res.json({error:error,msg:"error al recuperar visitas"});
      }else{
        res.json({visitas});
      }
    });
  });

}