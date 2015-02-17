var ApiResult = require('./apiresult');
var Validator = require('./validator');

var Controller = {

    do: function(number, action) {
        var message = null;
        if(!Validator.isExistNumber( number ) ) {
            message = ':number must be ' + Validator.getLegalNumbers();
            return ApiResult.error(number, action, message);
        }
        if(action === 'do'
           || !this.hasOwnProperty(action)) {
            message =':action must be show, on or off';
            return ApiResult.error(number, action, message);
        }
        return this[action].call(this, number);
    },

    show: function(number) {
        var message = 'show: ' + number;
        console.log(message);
        return ApiResult.ok(number, 'show', message);
    },

    on: function(number) {
        var message ='on : ' + number;
        console.log(message);
        return ApiResult.ok(number, 'on', message);
    },

    off: function(number) {
        var message = 'off : ' + number;
        console.log(message);
        return ApiResult.ok(number, 'off', message);
    }
};

module.exports = Controller;
