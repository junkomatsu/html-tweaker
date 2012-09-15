
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
  function c() {
    return Math.floor(Math.random()*256).toString(16)
  }
  return "#"+c()+c()+c();
}

/*
try {
  window.addEventListener('load', initTweaker, false);
} catch(e) {
  window.attachEvent('onload', initTweaker);
}
*/
