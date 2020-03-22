/*eslint-env browser*/
document.getElementById("button").addEventListener("click", highlight);
var iden = 'light';

function highlight() {
    var result = document.querySelector('#result');
    var expression = document.getElementById('input').value;
    var text = document.getElementById('textarea').value;
    var matches = text.match(expression);
    
    // verify it's alphanumeric and strings up to fifty characters
    //if (!matches.match(/^[0-9a-zA-Z]{1,50}$/)) return;
    
    var alter = '<span ' + (iden ? 'class="' + iden + '"' : '') + '>' + text + '</span>';
    result.innerHTML = text.replace(text, alter);
} 