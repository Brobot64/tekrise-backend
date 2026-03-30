import express from 'express';
import { bookService, getUserBookings, updateBookingStatus } from '../controllers/bookingController';
import { protect } from '../middleware/authMiddleware';

const router = express.Router();

router.post('/', protect, bookService);
router.get('/', protect, getUserBookings);
router.patch('/:id', protect, updateBookingStatus);

export default router;
