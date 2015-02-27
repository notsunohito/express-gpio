var ApiResult = require('../apiresult/apiresult');
var R         = require('./resources');
var exec      = require('child_process').exec;

var Controller = {

    do: function(action, gpioNumber) {
        var errorMessage;
        if(!R.isLegalNumber( gpioNumber )) {
            errorMessage = 'The gpioNumber must be any of the following values :  ' + R.enumlateNumbers();
            return ApiResult.error(gpioNumber, action, errorMessage);
        }
        if(!R.isLegalAction( action ) ) {
            errorMessage = 'The action must be any of the following values :  ' + R.enumlateActions();
            return ApiResult.error(gpioNumber, action, errorMessage);
        }
        return this[action].call(this, gpioNumber, action);
    },

    high: function(gpioNumber, action) {
        var message = 'GPIO' + gpioNumber + ':high => OK';
        exec('echo '+ gpioNumber +' > /sys/class/gpio/export');
        exec('echo out > /sys/class/gpio/gpio' + gpioNumber + '/direction');
        exec('echo 1 > /sys/class/gpio/gpio' + gpioNumber +'/value');
        return ApiResult.ok(gpioNumber, action, message);
    },

    low: function(gpioNumber, action) {
        var message = 'GPIO' + gpioNumber + ':low => OK';
        exec('echo 0 > /sys/class/gpio/gpio'+ gpioNumber +'/value');
        return ApiResult.ok(gpioNumber, action, message);
    }
};

module.exports = Controller;
