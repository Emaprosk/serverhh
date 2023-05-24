import ArticleModel from "../Models/ArticleModel.js";

export const getAllArticles = async (req, res) => {
    try {
        const articles = await ArticleModel.findAll();
        res.json(articles);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getArticle = async (req, res) => {
    try {
        const article = await ArticleModel.findAll({
            where: {
                id: req.params.id,
            },
        });

        res.json(article[0]);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const createArticle = async (req, res) => {
    try {
        const article = await ArticleModel.create(req.body);
        res.json(article);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const updateArticle = async (req, res) => {
    try {
        const article = await ArticleModel.update(req.body, {
            where: {
                id: req.params.id,
            },
        });
        res.json(article);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const deleteArticle = async (req, res) => {
    try {
        const article = await ArticleModel.destroy({
            where: {
                id: req.params.id,
            },
        });
        res.json({
            message: "Article deleted successfully",
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
