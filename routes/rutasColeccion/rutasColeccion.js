const Coleccion=require('../../models/modelColeccion/coleccion');

module.exports=(app)=>{
 
 app.post('/coleccion',(req,res)=>{
   const coleccion=req.body;
   Coleccion.guardarColeccion(coleccion,(error)=>{
    if(error){
      res.json({error:error,success:false,msg:"error al guardar coleccion"});
   }else{
      res.json({success:true,coleccion});
   }
   });
 });


 app.get('/coleccion',(req,res)=>{
   Coleccion.recuperarColecciones({},(error,colecciones)=>{
      if(error){
         res.json({error:error,success:false,msg:"error al recuperar colecciones"});
      }else{
         res.json({success:true,colecciones});
      }
   });
 });

 app.get('/coleccion/:id',(req,res)=>{
   const id=req.params.id;
   const coleccion=req.body;

   Coleccion.recuperarColeccionById(id,(error,coleccion)=>{
    if(error){
      res.json({error:error,success:false,msg:"error al recuperar coleccion especifica"});
     }else{
      res.json({success:true,coleccion});
     }
   });
 });

 app.put('/coleccion/:id',(req,res)=>{
   const id=req.params.id;
   const coleccion=req.body;

   Coleccion.editarColeccion(id,coleccion,(error,coleccion)=>{
    if(error){
      res.json({error:error,success:false,msg:"error al editar coleccion especifica"});
     }else{
      res.json({success:true,coleccion});
     }
   });

 });

 app.delete('/coleccion/:id',(req,res)=>{
   const id=req.params.id;
    Coleccion.eliminarColeccion(id,(error,coleccion)=>{
      if(error){
        res.json({error:error,success:false,msg:"error al eliminar coleccion especifica"});
       }else{
        res.json({success:true,coleccion});
       }
    });
 });

}