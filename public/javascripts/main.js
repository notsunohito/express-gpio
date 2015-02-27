(function() {

var rev2GpioPins =[/*'#pin2',*//*'#pin4',*//*'#pin6',*/'#pin8',  '#pin10', '#pin12',/*'#pin14',*/'#pin16',  '#pin18',/*'#pin20',*/'#pin22','#pin24', '#pin26',      
                   /*'#pin1',*/, '#pin3',    '#pin5',  '#pin7',/*'#pin9',*/'#pin11',  '#pin13',  '#pin15',/*'#pin17',*/'#pin19',  '#pin21','#pin23'/*'#pin25',*/];

rev2GpioPins.forEach(function(pin) {
    $(pin).on('click', toggleSwitch());
});

$("#pin3").trigger('click');


function toggleSwitch(e) {
    var existsSwtich = false;

    return function(e) {
        if(existsSwtich) {
            existsSwtich = false;
            e.currentTarget.classList.remove('gpio-pink');
            e.currentTarget.classList.add('gpio-green');
            removeSwitch(e);
        } else {
            existsSwtich = true;
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
    $("#switches").append( switchesTemplate(name, gpioNumber) );
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

function switchesTemplate(name, gpioNumber) {
    return '<li id="switch'+ gpioNumber +'">' +
             '<span class="left">'+ name +'</span>' +
             '<div class="onoffswitch left">' +
                 '<input type="checkbox" name="onoffswitch" class="onoffswitch-checkbox" id="gpio-switch'+ gpioNumber +'">' +
                 '<label class="onoffswitch-label" for="gpio-switch'+ gpioNumber +'">' +
                     '<span class="onoffswitch-inner"></span>' +
                     '<span class="onoffswitch-switch"></span>' +
                 '</label>' +
             '</div>' +
           '</li>';
}

}).call(this);
