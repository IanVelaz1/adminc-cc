const Navbar=require('../../models/modelNavbar/navbar');

module.exports=(app)=>{
  app.post('/navbar',(req,res)=>{
    const navbar=req.body;
      
    Navbar.guardarNavbar(navbar,(error,navbar)=>{
       if(error){
         res.json({error:error,success:false,msg:"error al guardar navbar"});
       }else{
         res.json({sucess:true,navbar});
       }
    });
     
  });

  app.get('/navbar',(req,res)=>{
     Navbar.recuperarNavbar({},(error,navbar)=>{
         if(error){
           res.json({error:error,success:false,msg:"no se pudo recuperar navbar"});
         }else{
           res.json({success:true,navbar});
         }
     });
  });

  app.put('/navbar/:id',(req,res)=>{
     const id=req.params.id;
     const navbar=req.body;
      Navbar.editarNavbar(id,navbar,(error,navbar)=>{
          if(error){
            res.json({error:error,success:false,msg:'error al editar navbar'});
          }else{
            res.json({success:true,navbar});
          }
      });
  });

  app.get("/navbar/:id",(req,res)=>{
    const id=req.params.id;
      Navbar.recuperarNavbarById(id,(error,navbar)=>{
        if(error){
          res.json({error:error,success:false,msg:'error al recuperar navbar'});
        }else{
          res.json({success:true,navbar});
        }
      });

  });

  app.delete("/navbar/:id",(req,res)=>{
    const id=req.params.id;
     Navbar.eliminarNavbar(id,(error,navbar)=>{
         if(error){
           res.json({error:error,success:false,msg:"error al eliminar navbar"});
         }else{
           res.json({success:true,navbar});
         }
     });
  });
}

