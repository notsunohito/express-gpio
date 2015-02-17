var express = require('express');
var router = express.Router();

var Validator = require('../modules/validator');


router.get('/:number/:action', function(req, res, next) {
    var number = req.params.number;
    var action = req.params.action;
    if (!Validator.isExistNumber( number )) {
        res.status(400).send('Validator:' + number + ' is not exist');
        return;
    }
    if (!Validator.isExistAction(action)) {
        res.status(400).send('action:' + action + ' is not defined');
        return;
    }
    res.status(200).send(number + ':' + action);
});


module.exports = router;
