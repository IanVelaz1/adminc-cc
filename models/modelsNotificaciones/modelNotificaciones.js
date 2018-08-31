const mongoose=require('mongoose');

const notificacionSchema=new mongoose.Schema({

 confirmacionOrden:{
   asunto:{
     type:String,
     default:""
   },
   mensaje:{
    type:String,
    default:""
  }
 },
 ordenCancelada:{
  asunto:{
    type:String,
    default:""
  },
  mensaje:{
    type:String,
    default:""
  }
},
 reembolsoOrden:{
  asunto:{
    type:String,
    default:""
  },
  mensaje:{
    type:String,
    default:""
  }
},
 confirmacionEnvio:{
  asunto:{
    type:String,
    default:""
  },
  mensaje:{
    type:String,
    default:""
  }
},
 pedidoEnviado:{
  asunto:{
    type:String,
    default:""
  },
  mensaje:{
    type:String,
    default:""
  }
},
 pedidoEntregado:{
  asunto:{
    type:String,
    default:""
  },
  mensaje:{
    type:String,
    default:""
  }
},
 confirmacionCliente:{
  asunto:{
    type:String,
    default:""
  },
  mensaje:{
    type:String,
    default:""
  }
},
 cambioPassword:{
  asunto:{
    type:String,
    default:""
  },
  mensaje:{
    type:String,
    default:""
  }
},
 confirmacionOrdenAdmin:{
  asunto:{
    type:String,
    default:""
  },
  mensaje:{
    type:String,
    default:""
  }
}

});

const Notificaciones=mongoose.model('notificaciones',notificacionSchema);

module.exports.guardarNotificacion=(notificacion,callback)=>{
  Notificaciones.create(notificacion,callback);
}

module.exports.recuperarNotificaciones=(notificacion,callback)=>{
  Notificaciones.find(notificacion,callback);
}

module.exports.recuperarNotificacionById=(id,callback)=>{
  Notificaciones.findById(id,callback);
}

module.exports.editarNotificacion=(id,notificacion,callback)=>{
  Notificaciones.findByIdAndUpdate(id,notificacion,callback);
}

module.exports.eliminarNotificacion=(id,callback)=>{
  Notificaciones.findByIdAndRemove(id,callback);
}

