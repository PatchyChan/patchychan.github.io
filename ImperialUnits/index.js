var btn_length = document.querySelector('#length');
var u_name = document.querySelector('#unit_name')
var u_text = document.querySelector('#unit_contents');

btn_length.onclick = function() {
    var i = Math.floor(Math.random() * arr_length.length);
    u_name.innerHTML = length_units[i].name;
    u_text.innerHTML = length_units[i].text;
}

