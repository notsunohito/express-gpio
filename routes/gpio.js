var express = require('express');
var router  = express.Router();

var GpioController = require('../modules/gpio/controller');


router.get('/:number/:action', function(req, res, next) {
    var number = req.params.number;
    var action = req.params.action;
    var result = GpioController.do(action, number);
    if (result.hasError) {
        res.status(400).json( result );
        return;
    }
    res.status(200).json( result );
});


module.exports = router;
