/*eslint-env browser*/
document.getElementById("button").addEventListener("click", highlight);

function highlight() {
    var result = document.querySelector('#result');
    var expression = document.getElementById('input').value;
    var text = document.getElementById('textarea').value;
    alert(expression);
    if (text.match(expression)) {
        result.innerHTML = 'The phone number is <strong>valid!</strong>';
  } else {
        result.innerHTML = 'The phone number is <strong>invalid!</strong>';
  }
}