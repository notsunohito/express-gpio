var express = require('express');
var router  = express.Router();

var GpioController = require('../modules/gpio/controller');


router.get('/:gpioNumber/:action', function(req, res, next) {
    var gpioNumber = req.params.gpioNumber;
    var action = req.params.action;
    var apiResult = GpioController.do(action, gpioNumber);
    if (apiResult.hasError) {
        res.status(400).json( apiResult );
        return;
    }
    res.status(200).json( apiResult );
});


module.exports = router;
