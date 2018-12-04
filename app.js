import express from'express';
import db from './db/db';

//set up the express app
const app = express();

app.get('/api/v1/reports', (req, res) => {
    res.status(200).send({
        success: 'true',
        message: 'reports retrieved successfully!',
        reports: db
    })
});

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});