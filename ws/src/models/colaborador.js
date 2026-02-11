const mongoose = require('mongoose');
const schema = mongoose.Schema;

const colaborador = new schema({
nome: {
    type: String,
    required: true,
},
telefone: {
    type: String,
    required: true,
},
email: {
    type: String,
    required: true,
},
senha: {
    type: String,
    required: true,
},
foto: {
    type: String,
    required: true,
},
dataNascimento: {
    type: String,
    required: true,
},
status: {
    type: String,
    required: true,
    enum:['A','I'],
    default: 'A',
},
sexo: {
    type: String,
    enum:['M', 'F'],
    required: true,
},
contaBancaria: {
    titular: {
        type: String,
        required: true
    },
    cpfCnpj: {
        type: String,
        required: true
    },
    banco:{
        type:String,
        required:true
    },
    tipo:{
        type:String,
        required:true
    },
    agencia:{
        type:String,
        required:true
    },
    numero:{
        type:String,
        required:true
    },
    dv:{
        type:String,
        required:true
    }
},
recipienteId: {
    type: String,
    required: true
},
dataCadastro: {
    type: Date,
    default: Date.now,
}
});

colaborador.index({ geo: '2dsphere' });
module.exports = mongoose.model('Colaborador', colaborador);
