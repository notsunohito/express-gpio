(function() {

var switchesTemplate = _.template(
          '<li id="switch<%= number %>">' +
            '<span class="left"><%= name %></span>' +
            '<div class="onoffswitch left">' +
              '<input type="checkbox" name="onoffswitch" class="onoffswitch-checkbox" id="gpio-switch<%= number %>">' +
              '<label class="onoffswitch-label" for="gpio-switch<%= number %>">' +
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

$("#gpio-switch2").on('change',function(){
    $.get('/gpio/2/on');
});

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
    var number = deriveNumber(name);
    $('#switch' + number).remove();
}

function appendSwitch(e) {
    var name = e.currentTarget.innerText;
    var number = deriveNumber(name);
    $("#switches").append(switchesTemplate({name: name, number: number}));
}

function deriveNumber(name) {
    return name
        .replace(/[^0-9]/g,'')
        .replace(/^0/,'');
}


}).call(this);
