
var button = document.getElementById("btn");
var btn = 0;
button.onclick = function (){
    btn = btn + 1;
    var span = document.getElementById("count");
    span.innerHTML = btn.toString();
};