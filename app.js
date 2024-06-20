const express = require('express');
const swaggerSpec = require('./swagger/swaggerConfig');
const swaggerUi = require('swagger-ui-express');

const app = express();

app.use('/ui', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(8080, (err) => {
    if (err) {
        return console.log('Error: ', err);
    }

    console.log('Server is up and running on port 8080');
});
