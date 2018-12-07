import express from 'express';
import ReportController from '../reportsControllers/reports';
import Joi from 'joi';
import validateRequestPayload from '../middleware/validateRequestPayload';

const CreateReportSchema = Joi.object({
  userId: Joi.number().positive().integer().required(),
  weight: Joi.number().positive().required(),
  pickup: Joi.string().required(),
  receiver_name: Joi.string().required(),
  destination: Joi.string().required(),
});

const router = express.Router();

//end point for getting all reports
router.get('/api/v1/reports', ReportController.getAllReports);

//endpoint for getting a specific report
router.get('/api/v1/reports/:id', ReportController.getReport);

//endpoint for creating a new report
router.post('/api/v1/reports', validateRequestPayload(CreateReportSchema), ReportController.createReport);

//endpoint for editing/updating a report
router.put('/api/v1/reports/:id', ReportController.updateReport);

//endpoint for deleting a report
router.delete('/api/v1/reports/:id', ReportController.deleteReport);

export default router;