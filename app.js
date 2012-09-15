
//function initTweaker() {
  //window.alert('html-tweaker!!');

  var elements = document.getElementsByTagName("*");
  var length = elements.length;
  var i = 0;
  while(i < length) {
    var element = elements[i++];
    element.style.backgroundColor = randomColor();
    element.style.borderColor = randomColor();
    element.style.borderWidth = '1px';
  }
//}

function randomColor() {
  return '#ff0000';
}

/*
try {
  window.addEventListener('load', initTweaker, false);
} catch(e) {
  window.attachEvent('onload', initTweaker);
}
*/
