var button = document.getElementById('counter');
var counter = 0;
button.onclick = function (){
  counter = counter + 1;
  var span = document.getElementById('count');
  span.innerHTML = counter.toString();
  //var request = new XMLHttpRequest();
  //request.onreadystatechange = function (){
    //  if (request.stutus === 200 ){
      //    var counter = request.responseText;
        //  var span = document.getElementById('count')
      }
  }
};
