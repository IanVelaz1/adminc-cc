const Pagina=require('../../models/modeloPaginas/paginas');

module.exports=(app)=>{
 
  app.get('/pagina',(req,res)=>{
    Pagina.recuperarPaginas({},(error,paginas)=>{
       if(error){
         res.json({error:error,success:false,msg:"error al recuperar paginas"});
       }else{
        res.json({success:true,paginas});
       }
    });
  });

  app.post('/pagina',(req,res)=>{
   const obj={pagina:req.body};


   console.log('====================================');
   console.log(obj);
   console.log('====================================');
    Pagina.guardarPagina(obj,(error,pagina)=>{
      if(error){
        res.json({error:error,success:false,msg:"error al guardar pagina"});
      }else{
       res.json({success:true,pagina});
      }
    });
  });

  app.get('/pagina/:id',(req,res)=>{
    const id=req.params.id;
    Pagina.recuperarPaginaById(id,(error,pagina)=>{
      if(error){
        res.json({error:error,success:false,msg:"error al recuperar pagina"});
      }else{
       res.json({success:true,pagina});
      }

    });
  });

  app.put('/pagina/:id',(req,res)=>{
   const id=req.params.id;
   const obj={pagina:req.body};
   console.log('====================================');
   console.log(obj);
   console.log('====================================');
   Pagina.editarPagina(id,obj,(error,pagina)=>{
    if(error){
      res.json({error:error,success:false,msg:"error al editar pagina"});
    }else{
     res.json({success:true,pagina});
    }
   });
  });

  app.delete('/pagina/:id',(req,res)=>{
    const id=req.params.id;
    Pagina.eliminarPagina(id,(error,pagina)=>{
      if(error){
        res.json({error:error,success:false,msg:"error al eliminar pagina"});
      }else{
        res.json({success:true,pagina});
      }
    });
  });

}