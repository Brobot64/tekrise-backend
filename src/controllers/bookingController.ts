import { Response } from 'express';
import asyncHandler from '../utils/asyncHandler';
import * as bookingService from '../services/bookingService';
import { AuthRequest } from '../interfaces';

// @desc    Book a service
// @route   POST /api/bookings
// @access  Private
export const bookService = asyncHandler(async (req: AuthRequest, res: Response) => {
  const { serviceId } = req.body;
  const booking = await bookingService.bookService(serviceId, req.user?._id);
  res.status(201).json(booking);
});

// @desc    Get user bookings
// @route   GET /api/bookings
// @access  Private
export const getUserBookings = asyncHandler(async (req: AuthRequest, res: Response) => {
  const bookings = await bookingService.getUserBookings(req.user?._id);
  res.status(200).json(bookings);
});

// @desc    Update booking status
// @route   PATCH /api/bookings/:id
// @access  Private
export const updateBookingStatus = asyncHandler(async (req: AuthRequest, res: Response) => {
  const { status } = req.body;
  const booking = await bookingService.updateBookingStatus(req.params.id as string, status, req.user?._id as any);
  res.status(200).json(booking);
});
