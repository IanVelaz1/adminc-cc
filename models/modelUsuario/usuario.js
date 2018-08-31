const mongoose=require('mongoose');
const bcrypt=require('bcryptjs');


const usuarioSchema=new mongoose.Schema({
   
  nombreUser:{
    type:String,
    default:""
  },
  apellidoUser:{
    type:String,
    default:""
  },
  emailUser:{
    type:String,
    default:""
  },
  contraUser:String,
  usernameUser:{
    type:String,
    default:""
  },
  generoUser:{
    type:String,
    default:""
  },
  telefonoUser:{
    type:String,
    default:""
  },
  direccionUser:{
    nombre:{
      type:String,
      default:""
    },
    apellido:{
      type:String,
      default:""
    },
    telefono:{
      type:String,
      default:""
    },
    estadoUser:{
      type:String,
      default:""
    },
    calleUser:{
      type:String,
      default:""
    },
    numeroCalle:{
      type:String,
      default:""
    },
    numeroInteriorCalle:{
      type:String,
      default:""
    },
    coloniaUser:{
      type:String,
      default:""
    },
    codigoPostalUser:{
      type:String,
      default:""
    },
    ciudadUser:{
      type:String,
      default:""
    },
    paisUser:{
      type:String,
      default:""
    },
    razonSocial:{
      type:String,
      default:""
    },
    rfc:{
      type:String,
      default:""
    }
  },
  direccionesUser:{
    type:Array,
    default:[]
  }
  ,
  razonSocialUser:{
    type:String,
    default:""
  },
  rfcUser:{
    type:String,
    default:""
  },
  ventasUser:{
    type:Array,
    default:[]
  },
  preguntasUser:{
    type:Array,
    default:[]
  }

});

const User=module.exports=mongoose.model('usuarios',usuarioSchema);

module.exports.guardarCliente=(user,callback)=>{
  User.create(user,callback);
}

module.exports.guardarUser=(user,callback)=>{
  
  bcrypt.genSalt(10,(error,salt)=>{
    bcrypt.hash(user.contraUser,salt,(error,hash)=>{
       if(error){
         throw error;
       }else{
         user.contraUser=hash;
         User.create(user,callback);
       }
    });
  })
}

module.exports.compararContra=(contra,hash,callback)=>{
  bcrypt.compare(contra,hash,(error,isMatch)=>{
    if(error){
      throw error;
    }else{
      callback(null,isMatch);
    }
  });
}

module.exports.recuperarUsuarios=(user,callback)=>{
  User.find(user,callback);
}

module.exports.recuperarUsuarioById=(id,callback)=>{
  User.findById(id,callback);
}

module.exports.recuperarUsuarioByMail=(email,callback)=>{
  User.findOne({emailUser:email},callback);
}

module.exports.editarUsuario=(id,usuario,callback)=>{
  User.findByIdAndUpdate(id,usuario,callback);
}

module.exports.eliminarUsuario=(id,callback)=>{
  User.findByIdAndRemove(id,callback);
}


