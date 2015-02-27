var apiResult = require('./apiresult.json');

var ApiResult = {
    ok: function(number, action, message) {
        apiResult.message    = message;
        apiResult.hasError   = false;
        apiResult.gpioNumber = number;
        apiResult.action     = action;
        console.log( message );
        return apiResult;
    },
    error: function(number, action, message) {
        apiResult.message    = message;
        apiResult.hasError   = true;
        apiResult.gpioNumber = number;
        apiResult.action     = action;
        console.log( message );
        return apiResult;
    }    
};

module.exports = ApiResult;
