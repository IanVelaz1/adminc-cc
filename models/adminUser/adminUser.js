const mongoose=require('mongoose'),
config=require('../../config/config'),
bcrypt=require('bcryptjs');

const adminSchema=new mongoose.Schema({
  nombre:{
    type:String,
    required:true
  },
  email:{
    type:String,
    required:true
  },
  password:{
    type:String,
    required:true
  },
  permisos:{
    cambiosProductos:Boolean,
    cambiosVentas:Boolean,
    cambiosAdmin:Boolean,
    cambiosClientes:Boolean,
  }

});

const Admin=module.exports=mongoose.model('admin',adminSchema);

module.exports.getAdminById=(id,callback)=>{
    
  Admin.findById(id,callback);

}

module.exports.recuperarAdmins=(admin,callback)=>{
  Admin.find(admin,callback);
}

module.exports.getAdminByEmail=(email,callback)=>{
  Admin.findOne({email:email},callback);
}

module.exports.crearAdmin=(admin,callback)=>{
  bcrypt.genSalt(10,(error,salt)=>{
   bcrypt.hash(admin.password,salt,(error,hash)=>{
      if(error){
        throw error;
      }else{
        admin.password=hash;
        Admin.create(admin,callback);
      }

   });

  });
}

module.exports.compararContra=(contra,hash,callback)=>{
  bcrypt.compare(contra,hash,(error,isMatch)=>{
    if(error){
      throw error;
    }else{
      callback(null,isMatch);
    }
  });

  module.exports.editarAdmin=(id,admin,callback)=>{
    Admin.findByIdAndUpdate(id,admin,callback);
  }

}

