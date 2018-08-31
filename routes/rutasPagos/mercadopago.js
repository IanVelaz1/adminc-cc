
module.exports=(app,mercadoPago)=>{
  
  

  app.post('/pago',(req,res)=>{
    let objCompra=req.body;
     let item={
       id:"",
       title:"",
       quantity:0,
       currency_id:'MXN',
       unit_price:0
     }
     let payer={
       name:req.nombre,
       surname:req.apellido,
       email:req.email,
       date_created:new Date().toTimeString(),
       phone:{
         number:req.telefono
       },
       adress:{
         street_name:req.body.calleUSer,
         street_number:req.body.numeroCalle,
         zip_code:req.body.codigoPostalUser
       }

     }

     let items=[];
     for(let i=0;i<req.body.items.length;i++){
       item={
         id:req.body.items[i]._id,
         title:req.body.items[i].nombreProd,
         quantity:req.body.items[i].cantidadCarrito,
         currency_id:'MXN',
         unit_price:req.body.items[i].precioVentaProd
       }
       let copia=Object.assign({},item);
       items.push(copia);
       item={
        id:"",
        title:"",
        quantity:0,
        currency_id:'MXN',
        unit_price:0
      }
     }

     let preference={
      items:items,
      payer:payer,
      payment_methods:{
        excluded_payment_methods:[
          {
            id:"accout_money"
          }
        ],
        installments:1
      }
     };

     console.log('====================================');
     console.log(preference);
     console.log('====================================');
    
     
     mercadoPago.preferences.create(preference).then(
       function(preference){
         res.json({preference});
         console.log('====================================');
         console.log(preference);
         console.log('====================================');
       }
     ).catch(function(error){
         res.json({error});
         console.log('====================================');
         console.log(error);
         console.log('====================================');
     });

  });

}