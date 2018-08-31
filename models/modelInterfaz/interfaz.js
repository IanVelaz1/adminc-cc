const mongoose=require('mongoose');

const interfazSchema=new mongoose.Schema({
  isEditable:Boolean,
  objetosCarousel:{
    type:Array,
    default:[]
  },
  objetoMenuSuperior:{
    type:Object,
    default:{}
  },
  imagenesDerechaSuperior:{
    type:Object,
    default:{}
  },
  imagenesIzquierda:{
    type:Array,
    default:[]
  },
  objetoWidgetIzquierda1:{
    type:Object,
    default:{}
  },
  arrayObjetosWidget2:{
    type:Array,
    default:[]
  },
  coleccionesSeccionesProd:{
    type:Object,
    default:{}
  },
  imagenesWidgetDerecha:{
    type:Object,
    default:{}
  },
  objetoMenuFooter:{
    type:Object,
    default:{}
  }
});

const Interfaz=mongoose.model('interfaz',interfazSchema);

module.exports.guardarInterfaz=(interfaz,callback)=>{
  Interfaz.create(interfaz,callback);
}

module.exports.recuperarInterfaz=(interfaz,callback)=>{
  Interfaz.find(interfaz,callback);
}

module.exports.editarInterfaz=(id,interfaz,callback)=>{
  Interfaz.findByIdAndUpdate(id,interfaz,callback);
}

module.exports.recuperarNavbar=(callback)=>{
  Interfaz.find({},{objetoMenuSuperior:1},callback);
}