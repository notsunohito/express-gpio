var Validator = {
    numbers: [ 2,3,4,7,8,9,
               10,11,14,15,17,18,
               22,23,24,25,27],
    actions: [ 'on',
               'off',
               'show'],
    isLegalNumber: function(number) {
        var n = parseInt(number, 10);
        return this.numbers.indexOf(n) >= 0;
    },
    isLegalAction: function(action) {
        return this.actions.indexOf(action) >= 0;
    },
    getLegalNumbers: function() {
        return this.numbers.reduce(function(acc, current) {
            return acc + ', ' + current;
        });
    }
};

module.exports = Validator;
