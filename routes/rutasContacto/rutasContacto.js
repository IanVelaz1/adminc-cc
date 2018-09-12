let Contacto=require('../../models/modelContacto/modelContacto');

module.exports=(app,nodemailer)=>{

 app.get('/contactos',(req,res)=>{
   Contacto.recuperarContactos({},(error,contactos)=>{
     if(error){
       res.json({error:error,msg:"error",success:false});
     }else{
       res.json({success:true,contactos});
     }
   });
 });

 app.post('/contacto',(req,res)=>{
   let objContacto=req.body;
   
   Contacto.guardarContacto(objContacto,(error,contacto)=>{
    if(error){
      res.json({error:error,msg:"error",success:false});
    }else{
      res.json({success:true,contacto});
      enviarMail(objContacto);
    }
   });
 });

 function enviarMail(contacto){
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
let mailOptions = {
  from: contacto.nombreContacto+" "+contacto.mailContacto, // sender address
  to: 'ian.codingmakers@gmail.com', // list of receivers
  subject: "alguien se ha puesto en contacto contigo", // Subject line
  html:contacto.asuntoContacto // html body
  };

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
 
 app.get('/contacto/:id',(req,res)=>{
  let id=req.params.id;
  Contacto.recuperarContactoById(id,(error,contacto)=>{
    if(error){
      res.json({error:error,msg:"error",success:false});
    }else{
      res.json({success:true,contacto});
    }
  });
 });

 app.put('/contacto/:id',(req,res)=>{
   let id=req.params.id;
   let objContacto=req.body;
   Contacto.editarContacto(id,objContacto,(error,contacto)=>{
    if(error){
      res.json({error:error,msg:"error",success:false});
    }else{
      res.json({success:true,contacto});
    }
   });
 });

 app.delete('/contacto/:id',(req,res)=>{
   let id=req.params.id;
   Contacto.eliminarContacto(id,(error,contacto)=>{
    if(error){
      res.json({error:error,msg:"error",success:false});
    }else{
      res.json({success:true,contacto});
    }
   });
 });

}