let gradientElement = document.querySelector(`.gradient-element`);

function trackCursor(distanceFromTop) {
  window.addEventListener('mousemove', (event) => {
    mousePos = { x: event.clientX, y: event.clientY };
  
    // var mouseX = mousePos.x - 554;
    // var mouseY = (mousePos.y - 211) + distanceFromTop;

    var mouseX = mousePos.x - 1000;
    var mouseY = (mousePos.y - 1000) + distanceFromTop;
  
    gradientElement.style.setProperty('--x',mouseX + "px");
    gradientElement.style.setProperty('--y',mouseY + "px");
  });
}

trackCursor(0);

window.addEventListener("scroll", event => {
  var topOffset = window.scrollY;
  trackCursor(topOffset)
}, { passive: true });