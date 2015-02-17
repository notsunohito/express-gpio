var express = require('express');
var router = express.Router();

var Controller = require('../modules/controller');


router.get('/:number/:action', function(req, res, next) {
    var number       = req.params.number;
    var action       = req.params.action;
    var result = Controller.do(number, action);
    if (result.hasError) {
        res.status(400).send( result );
        return;
    }
    res.status(200).send( result );
});


module.exports = router;
