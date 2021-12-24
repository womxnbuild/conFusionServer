const express = require('express');
const bodyParser = require('body-parser');

const dishRouter = express.Router();
dishRouter.use(bodyParser.json());
dishRouter.route('/')
    .all( (req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/plain');
        next(); // look for more routes for the same resource
    })
    .get( (req, res, next) => {
        res.end('Sending all dishes to you!')
    })
    .post( (req, res, next) => {
        res.end('Will add the dish:' + req.body.name + ' with details '+ req.body.description); // coming from the json request
    })
    .put( (req, res, next) => {
        res.statusCode =  403;
        res.end('PUT not supported on dishes');
    })
    // DANGEROUS - be careful
    .delete( (req, res, next) => {
        res.end('Deleting all dishes!');
    });

dishRouter.route('/:dishId')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/plain');
    next(); // look for more routes for the same resource
})
.get((req, res, next) => {
    res.end('Sending dishes details to you for id:' + req.params.dishId);
})
.post((req, res, next) => {
    res.end('POST not supported on /dishes/'+ req.params.dishId);
})
.put((req, res, next) => {
    res.write(`Updating dishes with id: ${req.params.dishId} \n`);
    res.end('Will update the dish:' + req.body.name + ' with details: '+ req.body.description);
})
// DANGEROUS - be careful
.delete((req, res, next) => {
    res.end('Deleting dishes with id: '+ req.params.dishId);
});



module.exports = dishRouter;