const Imagen=require ('../../models/modelImagen/imagenProducto.js');
const fs=require('fs');

module.exports=(app,upload,cloudinary)=>{

  var date=new Date();

  app.post("/imagenes/subir",upload.single('file'),(req,res)=>{
     console.log('====================================');
     console.log(req.file);
     console.log('====================================');
   cloudinary.uploader.upload(req.file.path,(result,error)=>{
     if(error){
       res.json({error:error,success:false,msg:"error al guardar foto"});
     }else{
       res.json({success:true,result});
     }
   });   
  });

  app.get("/imagenes/subir",(req,res)=>{
      Imagen.recuperarImagenes({},(error,imagen)=>{
          if(error){
          res.json({error:error,success:false});
          }else{
            res.json({success:true,imagen});
          }
      });
  });

  app.get("/imagenes/subir/:id",(req,res)=>{
    const id=req.params.id;
     Imagen.recuperarImagenesId(id,(error,imagen)=>{
        if(error){
          res.json({error:error,success:false,msg:"error al recuperar imagen"});
        }else{
          res.json({success:true,imagen});
        }
     });   

  });

  app.delete('/imagenes/:id',(req,res)=>{
     const id=req.params.id;
     console.log('====================================');
     console.log(id);
     console.log('====================================');
     cloudinary.uploader.destroy(id,(result)=>{
      res.json({result});
     });
  });

}