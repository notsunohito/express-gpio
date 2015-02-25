var Validator = {
    gpioNumbers: [ 2,3,4,7,8,9,
                   10,11,14,15,17,18,
                   22,23,24,25,27],
    actions: [ 'high',
               'low'],
    isLegalNumber: function(gpioNumber) {
        if(/[^0-9]/.test(gpioNumber)) {
            return false;
        }
        var n = parseInt(gpioNumber, 10);
        return this.gpioNumbers.indexOf(n) >= 0;
    },
    isLegalAction: function(action) {
        return this.actions.indexOf(action) >= 0;
    },
    getLegalNumbers: function() {
        return this.gpioNumbers.reduce(function(acc, current) {
            return acc + ', ' + current;
        });
    },
    getLegalActions: function() {
        return this.actions.reduce(function(acc, current) {
            return acc + ', ' + current;
        });
    }
};

module.exports = Validator;
