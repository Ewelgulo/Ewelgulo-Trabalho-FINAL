const mongoose = require('mongoose');
const schema = mongoose.Schema;

const servico = new schema({

dataCadastro: {
    type: Date,
    default: Date.now,
}
});

servico.index({ geo: '2dsphere' });
module.exports = mongoose.model('servico', servico);
