const Interfaz=require('../../models/modelInterfaz/interfaz');

module.exports=(app)=>{
  app.get('/interfaz',(req,res)=>{
    Interfaz.recuperarInterfaz({},(error,interfaz)=>{
       if(error){
         res.json({error:error,success:false,msg:"error al recuperar interfaz"});
       }else{
         res.json({success:true,interfaz});
       }
    });
  });

  app.post('/interfaz',(req,res)=>{
    const objInterfaz=req.body;
    console.log(objInterfaz);
    
    Interfaz.guardarInterfaz(objInterfaz,(error,interfaz)=>{
      if(error){
        res.json({error:error,success:false,msg:"error al guardar interfaz"});
      }else{
        res.json({success:true,interfaz});
      }
    });

  });

  app.put('/interfaz/:id',(req,res)=>{
   const id=req.params.id;
   const objInterfaz=req.body;
   Interfaz.editarInterfaz(id,objInterfaz,(error,interfaz)=>{
    if(error){
      res.json({error:error,success:false,msg:"error al editar interfaz"});
    }else{
      res.json({success:true,interfaz});
    }
   });
  });

  app.get('/interfaz/navbar',(req,res)=>{
     Interfaz.recuperarNavbar((error,navbar)=>{
       if(error){
         res.json({error:error,success:false,msg:"error al recuperar navbar"});
       }else{
         res.json({succes:true,navbar});
       }
     });
  })

}