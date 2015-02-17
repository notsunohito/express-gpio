var ApiResult = require('./apiresult');
var Validator = require('./validator');
var exec      = require('child_process').exec;

var Controller = {

    do: function(action, number) {
        var message = null;
        if(!Validator.isLegalNumber( number )) {
            message = 'error: The number must be any of the following values : ' + Validator.getLegalNumbers();
            return ApiResult.error(number, action, message);
        }
        if(!Validator.isLegalAction( action ) ) {
            message ="error: The action must be 'show', 'on' or 'off'";
            return ApiResult.error(number, action, message);
        }
        return this[action].call(this, number);
    },

    show: function(number) {
        var message = 'show: ' + number;
        return ApiResult.ok(number, 'show', message);
    },

    on: function(number) {
        var message ='on : ' + number;
        exec('echo 2 > /sys/class/gpio/export');
        exec('echo out > /sys/class/gpio/gpio2/direction');
        exec('echo 1 > /sys/class/gpio/gpio2/value');
        return ApiResult.ok(number, 'on', message);
    },

    off: function(number) {
        var message = 'off : ' + number;
        exec('echo 0 > /sys/class/gpio/gpio2/value');
        exec('echo 2 > /sys/class/gpio/unexport');
        return ApiResult.ok(number, 'off', message);
    }
};

module.exports = Controller;
