var min = 0;
var max = 50; 
var output = 7; // accroding to the picture, it starts from 7

document.getElementById('counter').innerHTML = output;

back_buttons.addEventListener('click', function () {
    if (output > min) {
        output = output - 1;
    document.getElementById('counter').innerHTML = output;
    }
});

front_buttons.addEventListener('click', function () {
    if (output < max) {
        output = output + 1;
    document.getElementById('counter').innerHTML = output;
    }
});