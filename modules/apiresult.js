var result = require('./result.json');

var ApiResult = {
    ok: function(number, action, message) {
        result.message    = message;
        result.hasError   = false;
        result.gpioNumber = number;
        result.action     = action;
        console.log( message );
        return result;
    },
    error: function(number, action, message) {
        result.message    = message;
        result.hasError   = true;
        result.gpioNumber = number;
        result.action     = action;
        console.log( message );
        return result;
    }    
};

module.exports = ApiResult;
