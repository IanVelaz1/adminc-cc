const Venta=require('../../models/modelVentas/ventas');

module.exports=(app)=>{
  app.post('/venta',(req,res)=>{
    let venta=req.body.objVenta;
    let confirmacion=req.body.notificaciones;
    Venta.guardarVenta(venta,(error,venta)=>{
       if(error){
         res.json({error:error,success:false,msg:"error al guardar venta"});
       }else{
        res.json({success:true,venta});
       }
    });
   
  enviarMailConfirmacion(confirmacion,venta);
  });

  function enviarMailConfirmacion(confirmacion,venta){
    let transporter = nodemailer.createTransport({
      host: 'smtpout.secureserver.net',
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
          user: 'contacto@coloretecosmetique.com', // generated ethereal user
          pass: 'Morrowind-5' // generated ethereal password
      },
      tls:{
        rejectUnauthorized:false
      }
  });

  // setup email data with unicode symbols
  let mailOptions = {
      from: '"Colorete Cosmetique" <contacto@coloretecosmetique.com>', // sender address
      to: venta.cliente_venta, // list of receivers
      subject: confirmacion.asunto, // Subject line
      html: confirmacion.mensaje // html body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
          return console.log(error);
      }
      console.log('Message sent: %s', info.messageId);
      // Preview only available when sending through an Ethereal account
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

      // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
      // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
  });

  }

  app.get('/venta',(req,res)=>{
    Venta.recuperarVentas({},(error,ventas)=>{
      if(error){
        res.json({error:error,success:false,msg:"error al recuperar ventas"});
      }else{
       res.json({success:true,ventas});
      }
    });
  });

  app.get('/venta/:id',(req,res)=>{
     const id=req.params.id;
     Venta.recuperarVentaById(id,(error,venta)=>{
      if(error){
        res.json({error:error,success:false,msg:"error al recuperar venta"});
      }else{
       res.json({success:true,venta});
      }
     });
  });

  app.put('/venta/:id',(req,res)=>{
    const id=req.params.id;
    const venta=req.body;
    Venta.editarVenta(id,venta,(error,venta)=>{
      if(error){
        res.json({error:error,success:false,msg:"error al editar venta"});
      }else{
       res.json({success:true,venta});
      }
    });
  });

  app.delete('/venta/:id',(req,res)=>{
     const id=req.params.id;
     Venta.eliminarVenta(id,(error,venta)=>{
      if(error){
        res.json({error:error,success:false,msg:"error al eliminar venta"});
      }else{
       res.json({success:true,venta});
      }
     })
  });
}