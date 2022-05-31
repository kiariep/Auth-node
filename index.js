const express = require('express');
const volleyball = require('volleyball');
const bodyparser = require('bodyparser');
const app = express();

app.use(volleyball);
app.use(bodyparser.json);

const auth = require('./auth/index.js');

app.get('/', (req, res) => {
    res.json({
        message: 'hellow world'
    });
});

app.use('/auth', auth);

function notFound(req, res, next) {
    res.status(404)
    const error = new Error('Not Found-' + req.originalUrl);
    next(error);
}

function errorHandler(err, req, res, next) {
    res.status(res.statusCode || 500);
    res.json({

        message: err.message,
        stack: err.stack
    });
}

app.use(notFound);
app.use(errorHandler);
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log('listening on port', port);

});