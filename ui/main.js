var button = document.getElementById('counter');

button.onclick = function (){
    
  var request = new XMLHttpRequest();
  request.onreadystatechange = function (){
      if (request.readyState === XMLHttpRequest.DONE){
    if (request.status === 200 ){
      var counter = request.responseText;
   var span = document.getElementById('count');
   span.innerHTML = counter.toString();
      }
  }
};

var img = document.getElementById('img');
img.onclick = function () {
    img.set.MarginLeft = '100px';
}
request.open('GET', 'http://http://mohammedrafi0709.imad.hasura-app.io/', true);
request.send(null);
};
var nameInput = doucment.getElementById('name');
var name = nameInput.value;
var submit = document.getElementById('submit_btn');
submit.onclick = function (){
    var names = ['name1', 'name2', 'name3', 'name4'] ;
    var list = '';
    for (i=0; i<names.length; i++) {
        list += '<li>'+ names[i]+ '</li>';
        
    }
    var ul = document.getElementById('namelist');
    ul.innerHTML = list;
}