let gradientElement = document.querySelector(`.gradient-element`);

function trackCursor() {
  window.addEventListener('mousemove', (event) => {
    mousePos = { x: event.clientX, y: event.clientY };
    console.log(`${mousePos.x}, ${mousePos.y}`);
  
    var mouseX = mousePos.x - 250;
    var mouseY = mousePos.y - 250;
  
    gradientElement.style.setProperty('--x',mouseX + "px");
    gradientElement.style.setProperty('--y',mouseY + "px");
  });
}

trackCursor();