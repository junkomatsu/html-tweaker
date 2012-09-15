try {
  window.addEventListener('load', init, false);
} catch(e) {
  window.attachEvent('onload', init);
}


function init() {
  window.alert('html-tweaker!!');

  var elements = document.getElementByTagName("*");
  var length = elements.length;
  while(i < length) {
    var element = elements[i++];
    element.style.backgroundColor = randomColor();
    element.style.borderColor = randomColor();
    element.style.borderWidth = '1px';
  }
}

function randomColor() {
  return '#ff0000';
}
