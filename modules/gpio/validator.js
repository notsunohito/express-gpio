var Validator = {
    numbers: [ 3,5,7,8,10,
               11,12,13,15,16,18,19,
               21,22,,23,25,26],
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
