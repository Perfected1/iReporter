import express from 'express';
import db from '../db/db';

const router = express.Router();

//end point for getting all reports
router.get('/api/v1/reports', (req, res) => {
    res.status(200).send({
        success: 'true',
        message: 'reports retrieved successfully!',
        reports: db,
    });
});

//endpoint for getting a specific report
router.get('/api/v1/reports/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);

    db.map((reports) => {
        if (reports.id === id) {
            return res.status(200).send({
                success: 'true',
                message: 'report retrieved successfully!',
                reports,
            });
        }
    });
    return res.status(404).send({
        success: 'false',
        message: 'report does not exist!',
    });
});

//endpoint for creating a new report
router.post('/api/v1/reports', (req, res) => {
    if (!req.body.title) {
        return res.status(400).send({
            success: 'false',
            message: 'title is required'
        });
    } else if (!req.body.comment) {
        return res.status(400).send({
            success: 'false',
            message: 'comment is required!'
        });
    }
    if (!req.body.location) {
        return res.status(400).send({
            success: 'false',
            message: 'location is required!'
        })
    }
    if (!req.body.type) {
        return res.status(400).send({
            success: 'false',
            message: 'Type is Required!'
        })
    }
    const report = {
        id: db.length + 1,
        title: req.body.title,
        comment: req.body.comment,
        type: req.body.type,
        location: req.body.location
    }
    db.push(report);
    return res.status(201).send({
        succcess: 'true',
        message: 'report successfully submitted to the Admin for review',
        report,
    });
});

//endpoint for editing/updating a report
router.put('/api/v1/reports/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);

    let reportFound;
    let itemIndex;
    db.map((reports, index) => {
        if (reports.id === id) {
            reportFound = reports;
            itemIndex = index;
        }
    });

    if (!reportFound) {
        return res.status(404).send({
            success: 'false',
            message: 'Report not Found!',
        });
    }

    if (!req.body.title) {
        return res.status(400).send({
            success: 'false',
            message: 'Title is required!',
        });
    } else if (!req.body.comment) {
        return res.status(400).send({
            success: 'false',
            message: 'Comment is required!',
        });
    }
    if (!req.body.type) {
        return res.status(400).send({
            success: 'false',
            message: 'type is required!',
        });
    }
    if (!req.body.location) {
        return res.status(400).send({
            success: 'false',
            message: 'location is required!'
        });
    }
    const updateReport = {
        id: reportFound.id,
        title: req.body.title || reportFound.title,
        comment: req.body.comment || reportFound.comment,
        type: req.body.type || reportFound.type,
        location: req.body.location || reportFound.location,
    };
    db.splice(itemIndex, 1, updateReport);

    return res.status(201).send({
        success: 'true',
        message: 'Report updated successfully!',
        updateReport,
    });
});

//endpoint for deleting a report
router.delete('/api/v1/reports/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);

    let reportsFound;
    let itemIndex;
    db.map((reports, index) => {
        if (reports.id === id) {
            reportsFound = reports;
            itemIndex = index;
        }
    });

    if (!reportsFound) {
        return res.status(404).send({
            success: 'false',
            message: 'Report was not found!',

        });
    }
    db.splice(itemIndex, 1);
    return res.status(200).send({
        success: 'true',
        message: 'Report was successfully deleted!',

    });
});

export default router;