/*eslint-env browser*/
//document.getElementById("button").addEventListener("click", highlight);

function highlight() {
    var result = document.querySelector('#result');
    var expression = new RegExp(document.getElementById('input').value, 'g');
    var text = document.getElementById('textarea').value;
    text = text.split("\n").join("<br>");
//  var matches = text.matchAll(expression);
//  verify it's alphanumeric and strings up to fifty characters
//  if (!matches.match(/^[0-9a-zA-Z]{1,50}$/)) return; 
    result.innerHTML = "";
    var matches = Array.from(expression[Symbol.matchAll](text));
    var wI, sI;
    
    for(var match of matches) {
        wI = text.indexOf(match, sI);
        result.innerHTML+=text.substring(sI, wI);
        result.innerHTML+="<span>" + match + "</span>";
        sI=wI+match.length;
    }
    result.innerHTML+=text.substring(sI);
     
//  for (var match of matches) {
//      alert(match);
//      var alter = "<span>" + match + "</span>"";
//      result.innerHTML = result.split(match).join(alter);
//    }  
} 