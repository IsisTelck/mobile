const mongoose = require('mongoose');

const conectarAoMongoDB = async() => {
    try {
        await mongoose.connect('mongodb+srv://isistelck:Isistelck2007@cloud0.sspuc2v.mongodb.net/Ecommerce?retryWrites=true&w=majority', 
        {            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Conectado ao MongoDB com sucesso.');
    } catch (error) {
        console.error('Erro de conexão com o MongoDB:', error);
    }
};

conectarAoMongoDB();