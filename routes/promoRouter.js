const express = require('express');
const bodyParser = require('body-parser');

const promoRouter = express.Router();
promoRouter.use(bodyParser.json());

promoRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/plain');
    next();
})
.get((req, res, next) => {
    res.end('Sending all promotions to you!');
})
.post((req, res, next) => {
    res.end('Adding a new promotion with name ' + req.body.name + ' and value: '+ req.body.value);
})
.put((req, res, next) => {
    res.statusCode = 403
    res.end('PUT not supported');
})
.delete((req, res, next) => {
    res.end('Deleting all promotions!');
});


promoRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/plain');
    next();
})
.get((req, res, next) => {
    res.end('Sending all promotions to you!');
})
.post((req, res, next) => {
    res.end('Adding a new promotion with name ' + req.body.name + ' and value: '+ req.body.value);
})
.put((req, res, next) => {
    res.statusCode = 403
    res.end('PUT not supported');
})
.delete((req, res, next) => {
    res.end('Deleting all promotions!');
});


promoRouter.route('/:promotionId')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/plain');
    next();
})
.get((req, res, next) => {
    res.end('Sending promotion with promotionId: ' + req.params.promotionId);
})
.post((req, res, next) => {
    res.statusCode = 403
    res.end('PUT not supported');
})
.put((req, res, next) => {
    res.write(`Updating promotion with promotionId: ${req.params.promotionId} \n`);
    res.end('Updating the promotion with name ' + req.body.name + ' and value: '+ req.body.value);
})
.delete((req, res, next) => {
    res.end('Deleting promotion with promotionId: '+ req.params.promotionId);
});

module.exports = promoRouter;