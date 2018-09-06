
module.exports=(app,mercadoPago)=>{
  
  
  app.post('/pago',(req,res)=>{
    let objCompra=req.body;
    console.log('====================================');
    console.log(objCompra);
    console.log('====================================');
     let item={
       id:"",
       title:"",
       quantity:0,
       picture_url:"",
       currency_id:'MXN',
       unit_price:0
     }
     let payer={
       name:objCompra.payer.nombre,
       surname:objCompra.payer.apellido,
       email:objCompra.payer.email,
       date_created:new Date().toTimeString(),
       phone:{
         number:parseFloat(objCompra.payer.telefono)
       },
       adress:{
         street_name:objCompra.payer.calleUser,
         street_number:objCompra.payer.numeroCalle,
         zip_code:objCompra.payer.codigoPostalUser
       }

     }

     let items=[];
     for(let i=0;i<req.body.items.length;i++){
       item={
         id:req.body.items[i]._id,
         title:req.body.items[i].nombreProd,
         quantity:req.body.items[i].cantidadCarrito,
         picture_url:req.body.items[i].imagenesProd[0].secure_url,
         currency_id:'MXN',
         unit_price:req.body.items[i].precioVentaProd
       }

       let copia=Object.assign({},item);
       items.push(copia);
       item={
        id:"",
        title:"",
        quantity:0,
        picture_url:"",
        currency_id:'MXN',
        unit_price:0
      }
     }

     let preference={
      items:items,
      payer:payer,
      payment_methods:{
        "excluded_payment_methods": [
          {
              "id": "master"
          }
      ],
      "excluded_payment_types": [
          {
              "id": "atm",
              "id":"account_money",
              "id":"digital_currency"
          }
      ],
        installments:1
      },
      shipments:{
        reciever_adress:{
          street_name:objCompra.payer.calleUser,
          street_number:objCompra.payer.numeroCalle,
          zip_code:objCompra.payer.codigoPostalUser
        }
      }
     };


    
     
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