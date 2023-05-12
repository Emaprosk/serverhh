import express from 'express';
import { createComent, deleteComent, getAllComents, getComent, updateComent } from '../Controllers/ComentController.js';


const routerComent = express.Router();

routerComent.get('/',getAllComents)
routerComent.get('/:id',getComent)
routerComent.post('/',createComent)
routerComent.put('/:id',updateComent)
routerComent.delete('/:id',deleteComent)

export default routerComent;