document.addEventListener("DOMContentLoaded", function() {
  var mathElements = document.querySelectorAll('.math.display');
  mathElements.forEach(function(element) {
      var wrapperDiv = document.createElement('div');
      wrapperDiv.style.overflowX = 'auto';
      while (element.firstChild) {
          wrapperDiv.appendChild(element.firstChild);
      }
      element.appendChild(wrapperDiv);
  });
});