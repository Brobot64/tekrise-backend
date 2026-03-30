import express from 'express';
import { createService, getServices, deleteService } from '../controllers/serviceController';
import { protect } from '../middleware/authMiddleware';

const router = express.Router();

router.post('/', protect, createService);
router.get('/', getServices);
router.delete('/:id', protect, deleteService);

export default router;
