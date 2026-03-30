import { Response } from 'express';
import asyncHandler from '../utils/asyncHandler';
import * as serviceService from '../services/serviceService';
import { AuthRequest } from '../interfaces';

// @desc    Create a new service
// @route   POST /api/services
// @access  Private
export const createService = asyncHandler(async (req: AuthRequest, res: Response) => {
  const service = await serviceService.createService(req.body, req.user?._id);
  res.status(201).json(service);
});

// @desc    Get all services
// @route   GET /api/services
// @access  Public
export const getServices = asyncHandler(async (req: AuthRequest, res: Response) => {
  const services = await serviceService.getServices();
  res.status(200).json(services);
});

// @desc    Delete a service
// @route   DELETE /api/services/:id
// @access  Private
export const deleteService = asyncHandler(async (req: AuthRequest, res: Response) => {
  const result = await serviceService.deleteService(req.params.id as string, req.user?._id as any);
  res.status(200).json(result);
});
