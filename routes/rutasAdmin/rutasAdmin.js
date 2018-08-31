const router=require('express').Router();
const passport=require('passport');
const jwt=require('jsonwebtoken');
const Admin=require('../../models/adminUser/adminUser');
const config=require('../../config/config');

module.exports=(app,passport)=>{
  app.post('/admin',(req,res)=>{
     var admin=req.body;
     Admin.crearAdmin(admin,(error,admin)=>{
       if(error){
          res.json({success:false,msg:"error al crear usuario",error:error});
       }else{
        res.json({success:true, msg:"admin creado"});
       }
     });
  });

  app.get('/admin',(req,res)=>{
     Admin.recuperarAdmins({},(error,administradores)=>{
       if(error){
         res.json({error:error,success:fasle,msg:"error al recuperar administradores"});
       }else{
         res.json({success:true,administradores});
       }
     })
  });

  app.get('/admin/perfil/:id',(req,res)=>{
    const id=req.params.id;
    Admin.getAdminById(id,(error,admin)=>{
       if(error){
        res.json({error:error,success:false,msg:"error al recuperar admin"});
       }else{
        res.json({success:true,admin});
       }
    });
  });

  app.post('/admin/login',(req,res)=>{
     const email=req.body.email;
     const password=req.body.password;
     Admin.getAdminByEmail(email,(error,admin)=>{
       if(error){
         res.json({success:false,msg:"usuario no encontrado"});
       }if(!admin){
        res.json({success:false, msg:"usuario no encontrado"});
      }try{
         Admin.compararContra(password,admin.password,(error,isMatch)=>{
           if(error){
             res.json('wrong password');
           }else if(isMatch){
             const token=jwt.sign(admin.toJSON(),config.secret,{expiresIn:7200});
             res.json({
               success:true,
               token:"bearer "+token,
               admin:{
                 id:admin._id,
                 email:admin.email,
                 password:admin.password
               }
             })
           }else{
            res.json({success:false,msg:"password not correct"});
           }
         })
       }catch(TypeError){
        console.log("error usuario no encontrado");
        }

     });
  });

  app.get('/admin/perfil',passport.authenticate('jwt',{session:false}),(req,res)=>{
    res.send(req.user);
  });

  app.post('/admin/compare',(req,res)=>{
    const oldPassword=req.body.password;
    const adminPassword=req.body.adminPassword;
    
    try{
     Admin.compararContra(password,adminPassword,(error,isMatch)=>{
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
}