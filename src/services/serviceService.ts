import Service from '../models/Service';
import { IService } from '../interfaces';

export const createService = async (serviceData: any, userId: any) => {
  const { title, description } = serviceData;

  const service = await Service.create({
    title,
    description,
    createdBy: userId,
  });

  return service;
};

export const getServices = async () => {
  const services = await Service.find().populate('createdBy', 'name email');
  return services;
};

export const deleteService = async (serviceId: string, userId: any) => {
  const service = await Service.findById(serviceId);

  if (!service) {
    throw new Error('Service not found');
  }

  // Check if user is the creator
  if (service.createdBy.toString() !== userId.toString()) {
    throw new Error('Not authorized to delete this service');
  }

  await Service.findByIdAndDelete(serviceId);
  return { message: 'Service removed' };
};
