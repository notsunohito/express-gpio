var result = require('./result.json');

var ApiResult = {
    ok: function(number, action, message) {
        result.number = number;       
        result.action = action;       
        result.hasError = false;    
        result.message = message;
        console.log( message );
        return result;
    },
    error: function(number, action, message) {
        result.number = number;       
        result.action = action;       
        result.hasError = true;    
        result.message = message;
        console.log( message );
        return result;
    }    
};

module.exports = ApiResult;
