import ComentModel from "../Models/ComentModel.js";

export const getAllComents = async (req, res) => {
    try {
        const coments = await ComentModel.findAll();
        res.json(coments);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const getComent = async (req, res) => {
    try {
        const coment = await ComentModel.findAll({
            where: {
                id: req.params.id
            }
        });
        res.json(coment[0]);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const createComent = async (req, res) => {
    try {
        const coment = await ComentModel.create(req.body);
        res.json(coment);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const updateComent = async (req, res) => {
    try {
        const coment = await ComentModel.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json(coment);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const deleteComent = async (req, res) => {
    try {
        const coment = await ComentModel.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            message: "Coment deleted successfully"
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}