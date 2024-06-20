const express = require('express');
const swaggerSpec = require('./swaggerConfig');
const swaggerUi = require('swagger-ui-express');

const app = express();

app.use(express.json());

app.use('/ui', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.get('/CustomerInfo', (req, res) => {
    res.send('Customer Info goes here');
});

app.post('/CustomerInfo', (req, res) => {
    console.log(req.body);
    res.json({ success: true, message: 'item created' });
});

app.listen(8080, (err) => {
    if (err) {
        return console.log('Error: ', err);
    }

    console.log('Server is up and running on port 8080');
});
