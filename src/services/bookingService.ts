import Booking from '../models/Booking';
import Service from '../models/Service';
import { BookingStatus } from '../interfaces';

export const bookService = async (serviceId: string, userId: any) => {
  const service = await Service.findById(serviceId);

  if (!service) {
    throw new Error('Service not found');
  }

  const booking = await Booking.create({
    service: serviceId,
    user: userId,
  });

  return booking;
};

export const getUserBookings = async (userId: any) => {
  const bookings = await Booking.find({ user: userId })
    .populate('service')
    .populate('user', 'name email');
  return bookings;
};

export const updateBookingStatus = async (bookingId: string, status: BookingStatus, userId: any) => {
  const booking = await Booking.findById(bookingId).populate('service');

  if (!booking) {
    throw new Error('Booking not found');
  }

  // Check if user is the one who booked OR the creator of the service
  const service: any = booking.service;
  if (booking.user.toString() !== userId.toString() && service.createdBy.toString() !== userId.toString()) {
    throw new Error('Not authorized to update this booking status');
  }

  booking.status = status;
  await booking.save();

  return booking;
};
