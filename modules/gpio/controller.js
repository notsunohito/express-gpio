var ApiResult = require('./apiresult');
var Validator = require('./validator');

var Controller = {

    do: function(number, action) {
        var message = null;
        if(!Validator.isExistNumber( number ) ) {
            message = 'error: Number must be any of the folloing values : ' + Validator.getLegalNumbers();
            return ApiResult.error(number, action, message);
        }
        if(action === 'do'
           || !this.hasOwnProperty(action)) {
            message ="error: Action must be 'show', 'on' or 'off'";
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
        return ApiResult.ok(number, 'on', message);
    },

    off: function(number) {
        var message = 'off : ' + number;
        return ApiResult.ok(number, 'off', message);
    }
};

module.exports = Controller;
