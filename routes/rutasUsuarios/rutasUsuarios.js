const Usuario=require('../../models/modelUsuario/usuario');
const jwt=require('jsonwebtoken');
const config=require('../../config/config');
module.exports=(app,passport)=>{

  
  app.post('/usuario',(req,res)=>{
     const usuario=req.body;
     if(usuario.emailUser.length>0 && usuario.contraUser.length>0){
      Usuario.guardarUser(usuario,(error,usuario)=>{
        if(error){
          res.json({error:error,success:false,msg:"error al guardar usuario"});
        }else{
          res.json({success:true,usuario})
        }
     }); 
     }else {
       Usuario.guardarCliente(usuario,(error,usuario)=>{
         if(error){
           res.json({success:false,error:error,msg:'error al guardar usuario'});
         }else{
           res.json({success:true,usuario});
         }
       })
     }
    
  });

  app.post('/usuario/login',(req,res)=>{
    const email=req.body.emailUser;
     const password=req.body.contraUser;
     console.log('====================================');
     console.log(email);
     console.log(password);
     console.log('====================================');

     Usuario.recuperarUsuarioByMail(email,(error,user)=>{
      if(error){
      res.json({success:false,msg:"mail no encontrado"});
      }if(!user){
        res.json({success:false,msg:"mail incorrecto"});
      }try{
        Usuario.compararContra(password,user.contraUser,(error,isMatch)=>{
          if(error){
            res.json('contraseña incorrecta');
          }else if(isMatch){
            const token=jwt.sign(user.toJSON(),config.secret,{expiresIn:7200});
            res.json({
              success:true,
              token:"bearer "+token,
              user:{
                id:user._id,
                email:user.emailUser,
                contra:user.contraUser
              }
            })
          }else{
           res.json({success:false,msg:"contraseña incorrecta"});
          }
        })
      }catch(TypeError){
        console.log("error usuario no encontrado");
      }
    });
  });

  app.get('/usuario/perfil',passport.authenticate('jwt',{session:false}),(req,res)=>{
    res.json(req.user);
  });

  app.get('/usuarios',(req,res)=>{
    Usuario.recuperarUsuarios({},(error,usuarios)=>{
      if(error){
        res.json({error:error,success:false,msg:"error al recuperar usuarios"});
      }else{
        res.json({success:true,usuarios});
      }
    });
  });

  app.post('/admin/compare',(req,res)=>{
    const oldPassword=req.body.contraUser;
    const adminPassword=req.body.adminPassword;
    
    try{
     Admin.compararContra(oldPassword,adminPassword,(error,isMatch)=>{
       if(error){
         res.json('contraseña incorrecta');
       }else if(isMatch){
          Admin.editarAdmin(req.body._id,req.body,(error,admin)=>{
             if(error){
               res.json({error:error,msg:"error al editar contraseña",success:false});
             }else({success:true,admin});
          });
       }
     });
    }catch(TypeError){

    }

  });

  app.post('/usuario/:id',(req,res)=>{
    
      let id=req.params.id;
      let logged=req.body;
      if(logged.logged==true){
        Usuario.recuperarUsuarioById(id,(error,usuario)=>{
          if(error){
            res.json({error:error,success:false,msg:"error al recuperar usuario especifico"});
          }else{
            res.json({success:true,usuario})
          }
         });
      }else{
        res.json({error:'not logged in'});
      }
      
    
  });

  app.put('/usuario/:id',(req,res)=>{
     const id=req.params.id;
     const usuario=req.body;
     Usuario.editarUsuario(id,usuario,(error,usuario)=>{
      if(error){
        res.json({error:error,success:false,msg:"error al editar usuario especifico"});
      }else{
        res.json({success:true,usuario})
      }
     });
  });

  app.delete('/usuario/:id',(req,res)=>{
     const id=req.params.id;
     Usuario.eliminarUsuario(id,(error,usuario)=>{
      if(error){
        res.json({error:error,success:false,msg:"error al eliminar usuario especifico"});
      }else{
        res.json({success:true,usuario})
      }
     });
  });

}