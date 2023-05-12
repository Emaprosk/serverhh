import PermisosModel from "../Models/PermisosModel.js";

export const getPow = async (req, res) => {
    try {
        const pow = await PermisosModel.findAll({
            where: {
                id: req.params.id,
            },
        });
        res.json(pow[0]);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const updatePow = async (req, res) => {
    try {
        const pow = await PermisosModel.update(req.body, {
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json(pow);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
