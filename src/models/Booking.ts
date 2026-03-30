import mongoose, { Schema } from 'mongoose';
import { IBooking, BookingStatus } from '../interfaces';

const bookingSchema: Schema = new Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    service: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Service',
      required: true,
    },
    status: {
      type: String,
      enum: Object.values(BookingStatus),
      default: BookingStatus.PENDING,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<IBooking>('Booking', bookingSchema);
