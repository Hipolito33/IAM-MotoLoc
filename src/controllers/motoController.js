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


const listarMotos = async (req, res) => {
    try {
        const motosListadas = await prisma.moto.findMany();
        res.json(motosListadas);
    } catch (error) {
        console.error(error);
        res.send("Erro ao listar as motos!");
    }
};

const buscarMotoPorID = async (req, res) => {
    try {
        const { id } = req.params;
        const moto = await prisma.moto.findUnique({
            where: {
                id: Number(id)
            }
        });
        if (!moto) {
            return res.status(404).send("Moto não encontrada.")
        }
        res.json(moto);
    } catch (error) {
        console.error(error);
        res.status(500).send("Erro ao buscar a moto.");
    }
};

const atualizarMoto = async (req, res) => {
    try {
        const { id } = req.params;
        const {
            marca,
            modelo,
            quilometragem,
            placa,
            chassi,
            cor,
            cilindrada
        } = req.body;

        await prisma.moto.update({
            where: {
                id: Number(id)
            },
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
        res.send("Moto atualizada com sucesso!");
    }
    catch (error) {

        console.error(error)
        res.status(500).send("Erro ao atualizar a moto.");
    }
};

const deletarMoto = async (req,res) => {
    try{
        const { id } = req.params;
        await prisma.moto.delete({
            where: {
                id: Number(id)
            }    
        });
        res.json("Moto deletada com sucesso!");

    } catch(error){
        console.error(error);
        res.status(500).send("Erro ao deletar a moto.");
    }
}

module.exports = {
    criarMoto,
    listarMotos,
    buscarMotoPorID,
    atualizarMoto,
    deletarMoto
};  