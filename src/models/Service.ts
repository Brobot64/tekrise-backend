import mongoose, { Schema } from 'mongoose';
import { IService } from '../interfaces';

const serviceSchema: Schema = new Schema(
  {
    title: {
      type: String,
      required: [true, 'Please add a service title'],
      trim: true,
      maxlength: [50, 'Title cannot be more than 50 characters'],
    },
    description: {
      type: String,
      required: [true, 'Please add a description'],
      maxlength: [500, 'Description cannot be more than 500 characters'],
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<IService>('Service', serviceSchema);
