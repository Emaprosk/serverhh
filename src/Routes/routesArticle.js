import express from 'express';
import { createArticle, deleteArticle, getAllArticles, getArticle, updateArticle } from '../Controllers/ArticleController.js';

const routerArti = express.Router();

routerArti.get('/',getAllArticles)
routerArti.get('/:id',getArticle)
routerArti.post('/',createArticle)
routerArti.put('/:id',updateArticle)
routerArti.delete('/:id',deleteArticle)

export default routerArti;