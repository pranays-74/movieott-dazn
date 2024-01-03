// src/routes/movieRoutes.ts
import express, { Router } from 'express';
import * as movieController from '../controllers/movieController';
import { checkRole } from '../middleware/checkRole';
const router: Router = express.Router();

router.get('/getAll', movieController.getAll);
router.post('/create', checkRole(), movieController.create);
router.get('/:id', movieController.getById);
router.put('/update/:id', checkRole(), movieController.updateById);
router.delete('/delete/:id', checkRole(), movieController.deleteById);

export default router;
