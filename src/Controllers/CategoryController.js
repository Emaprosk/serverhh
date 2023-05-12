import CategoryModel from "../Models/CategoryModel.js";

export const getAllCategory = async (req, res) => {
    try {
        const categories = await CategoryModel.findAll();
        res.json(categories);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getCategory = async (req, res) => {
    try {
        const category = await CategoryModel.findAll({
            where: {
                id: req.params.id,
            },
        });
        res.json(category[0]);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const createCategory = async (req, res) => {
    try {
        const category = await CategoryModel.create(req.body);
        res.json(category);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const updateCategory = async (req, res) => {
    try {
        const category = await CategoryModel.update(req.body, {
            where: {
                id: req.params.id,
            },
        });
        res.json(category);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const deleteCategory = async (req, res) => {
    try {
        const category = await CategoryModel.destroy({
            where: {
                id: req.params.id,
            },
        });
        res.json({
            message: "Category deleted successfully",
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
