var result = document.querySelector('#result');
var expression = document.querySelector('#input');
var text = document.querySelector('#textarea');

document.getElementById("button").addEventListener("click", highlight);

function highlight(){
    if (text.match(expression)) {
    result.innerHTML = 'The phone number is <strong>valid!</strong>';
  } else {
    result.innerHTML = 'The phone number is <strong>invalid!</strong>';
  }
}