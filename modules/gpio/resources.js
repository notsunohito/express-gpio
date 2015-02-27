var Resources = {
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
    enumlateNumbers: function() {
        return this.gpioNumbers.join(', ');
    },
    enumlateActions: function() {
        return this.actions.join(', ');
    }
};

module.exports = Resources;
