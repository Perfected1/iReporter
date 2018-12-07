import express from 'express';
import bodyParser from 'body-parser';
import router from './routes/index.js';

//set up the express app
const app = express();

app.get('/', (req, res) => {
    res.json('Welcome to iReporter News Platform');
  });

//Parse incoming requests data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(router);

app.all('*', (req, res) => {
    res.json('Route not available at the moment');
  });

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});

export default app;