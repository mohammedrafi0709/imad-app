
var button = document.geteEementById ("counter");
var counter= 0;
button.onclick = function (){
    counter = counter + 1;
    var span = document.getelementbyid ("count");
    span.innerHTML = counter.toString();
};