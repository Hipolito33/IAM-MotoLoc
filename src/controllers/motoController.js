const prisma = require('../prisma');

// Importa a conexão com o banco.

const criarMoto = async (req, res) => {
    // Define a função que será executada quando alguém fizer um POST /motos.
    try {
        const {
            marca,
            modelo,
            quilometragem,
            placa,
            chassi,
            cor,
            cilindrada
        } = req.body;

        await prisma.moto.create({
            data: {
                marca,
                modelo,
                quilometragem,
                placa,
                chassi,
                cor,
                cilindrada
            }
        });

        res.send("Moto criada com sucesso!");
    } catch (error) {
        console.error(error);
        res.send("Erro ao cadastrar a moto!");
    }
};

module.exports = {
    criarMoto
};