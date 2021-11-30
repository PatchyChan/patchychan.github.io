var btn_length = document.querySelector('#length');
var u_name = document.querySelector('#unit_name')
var u_text = document.querySelector('#unit_contents');

var arr_length = new Array(
    {name: "inch", text: "1inch = 25.4cm" }, 
    {name: "foot", text: "1foot = 30.48cm = 12inch" },
    {name: "yard", text: "1yard = 91.44cm = 36inch" })

btn_length.onclick = function() {
    var i = Math.floor(Math.random() * arr_length.length);
    u_name.innerHTML = arr_length[i].name;
    u_text.innerHTML = arr_length[i].text;
}

