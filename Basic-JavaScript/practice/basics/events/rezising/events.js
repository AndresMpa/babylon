let title = document.querySelector('h1');
let paragraph = document.querySelector('p');
let windowHeight;
let windowWidth;

window.addEventListener('resize', function(){
  windowWidth = window.innerWidth;
  windowHeight = window.innerHeight;
  title.innerHTML = `window width now is ${windowWidth}`;
  paragraph.innerHTML = `Window height now is ${windowHeight}`;
});
