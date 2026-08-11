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

        const moto = await prisma.moto.create({
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

        res.status(201).json(moto); // informa ao cliente que um recurso foi criado com sucesso.
    } catch (error) {
        console.error(error);
        res.status(500).json({
            erro: "Erro ao criar moto!"
        });
    }
};

const listarMotos = async (req, res) => {
    try {
        const motosListadas = await prisma.moto.findMany();

        res.status(200).json(motosListadas);
    } catch (error) {
        console.error(error);

        res.status(500).json({
            erro: "Erro ao listar as motos!"
        });
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
            return res.status(404).json({
                erro: "Moto não encontrada!"
            });
        }

        res.status(200).json(moto);
    } catch (error) {
        console.error(error);

        res.status(500).json({
            erro: "Erro ao buscar a moto!"
        });
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

        const moto = await prisma.moto.update({
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

        res.status(200).json(moto);
    } catch (error) {
        console.error(error);

        if (error.code === "P2025") {
            return res.status(404).json({
                erro: "Moto não encontrada!"
            });
        } else if (error.code === "P2002") {
            return res.status(409).json({
                erro: "Já existe uma moto com essa placa ou chassi."
            });
        } else {
            return res.status(500).json({
                erro: "Erro ao atualizar a moto."
            });
        }
    }
};

const deletarMoto = async (req, res) => {
    try {
        const { id } = req.params;

        const moto = await prisma.moto.delete({
            where: {
                id: Number(id)
            }
        });

        res.status(200).json(moto);
    } catch (error) {
        console.error(error);

        if (error.code === "P2025") {
            return res.status(404).json({
                erro: "Moto não encontrada!"
            });
        } else {
            return res.status(500).json({
                erro: "Erro ao deletar a moto."
            });
        }
    }
};

module.exports = {
    criarMoto,
    listarMotos,
    buscarMotoPorID,
    atualizarMoto,
    deletarMoto
};