var counter;
var button = document.getelementbyid ("btn");
button.onclick = function (){
    counter = counter + 1;
    var span = document.getelementbyid ("count");
    span.innerHTML = counter.toString();
};