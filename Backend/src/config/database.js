const mongoose = require('mongoose')

//mongoose.Promise = global.Promise

module.exports = mongoose.connect('mongodb+srv://netoanttunes:abcd1234@cluster0-wbgie.mongodb.net/mymoney?retryWrites=true&w=majority',
{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatório."
mongoose.Error.messages.Number.min = "O '{VALUE}' informado é menor que o limite mínimo de '{MIN}'."
mongoose.Error.messages.Number.max = "O '{VALUE}' informado é menor que o limite mínimo de '{max}'."
mongoose.Error.messages.String.enum = "O '{VALUE}' não é válido para o atributo '{PATH}'."