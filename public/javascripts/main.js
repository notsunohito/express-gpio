(function() {

var switchesTemplate = _.template(
    '<li id="switch<%= gpioNumber %>">' +
        '<span class="left"><%= name %></span>' +
        '<div class="onoffswitch left">' +
            '<input type="checkbox" name="onoffswitch" class="onoffswitch-checkbox" id="gpio-switch<%= gpioNumber %>">' +
            '<label class="onoffswitch-label" for="gpio-switch<%= gpioNumber %>">' +
                '<span class="onoffswitch-inner"></span>' +
                '<span class="onoffswitch-switch"></span>' +
            '</label>' +
        '</div>' +
    '</li>');

$("#pin8").on('click', toggleSwitch());
$("#pin10").on('click', toggleSwitch());
$("#pin12").on('click', toggleSwitch());
$("#pin16").on('click', toggleSwitch());
$("#pin18").on('click', toggleSwitch());
$("#pin22").on('click', toggleSwitch());
$("#pin24").on('click', toggleSwitch());
$("#pin26").on('click', toggleSwitch());

$("#pin3").on('click', toggleSwitch());
$("#pin5").on('click', toggleSwitch());
$("#pin7").on('click', toggleSwitch());
$("#pin11").on('click', toggleSwitch());
$("#pin13").on('click', toggleSwitch());
$("#pin15").on('click', toggleSwitch());
$("#pin19").on('click', toggleSwitch());
$("#pin21").on('click', toggleSwitch());
$("#pin23").on('click', toggleSwitch());

$("#pin3").trigger('click');

function toggleSwitch(e) {
    var exists = false;

    return function(e) {
        if(exists) {
            exists = false;
            e.currentTarget.classList.remove('gpio-pink');
            e.currentTarget.classList.add('gpio-green');
            removeSwitch(e);
        } else {
            exists = true;
            e.currentTarget.classList.remove('gpio-green');
            e.currentTarget.classList.add('gpio-pink');
            appendSwitch(e);
        }
    };
}

function removeSwitch(e) {
    var name = e.currentTarget.innerText;
    var gpioNumber = deriveGpioNumber(name);
    $('#switch' + gpioNumber).remove();
}

function appendSwitch(e) {
    var name = e.currentTarget.innerText;
    var gpioNumber = deriveGpioNumber(name);
    $("#switches").append(switchesTemplate({name: name, gpioNumber: gpioNumber}));
    $("#gpio-switch" + gpioNumber).on('change',toggleGpio());
}

function toggleGpio(e) {
    var isHigh = false;
    return function(e) {
        var name = e.currentTarget.id;
        var gpioNumber = deriveGpioNumber(name);
        if(isHigh) {
            isHigh = false;
            $.get('/gpio/'+gpioNumber+'/low');
        } else {
            isHigh = true;
            $.get('/gpio/'+gpioNumber+'/high');
        }
    };
}

function deriveGpioNumber(name) {
    return name
        .replace(/[^0-9]/g,'')
        .replace(/^0/,'');
}

}).call(this);
