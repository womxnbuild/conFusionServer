const express = require('express');
const bodyParser = require('body-parser');

const leaderRouter = express.Router();
leaderRouter.use(bodyParser.json());
leaderRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/plain');
    next();
})
.get((req, res, next) => {
    res.end('Sending all leaders to you!');
})
.post((req, res, next) => {
    res.end('Adding leader with name: '+ req.body.name + ' and title: '+ req.body.title)
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT not supported');
})
.delete((req, res, next) => {
    res.end('Deleting all leaders')
});

leaderRouter.route('/:leaderId')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/plain');
    next();
})
.get((req, res, next) => {
    res.end('Sending leader with id: '+ req.params.leaderId);
})
.post((req, res, next) => {
    res.statusCode = 403;
    res.end('POST not supported');
})
.put((req, res, next) => {
    res.write(`Updating leader with id: ${req.params.leaderId} \n`);
    res.end('Updating leader with name: '+ req.body.name + ' and title: '+ req.body.title);
})
.delete((req, res, next) => {
 res.end(`Deleting leader with id: ${req.params.leaderId}`);
});

module.exports = leaderRouter;