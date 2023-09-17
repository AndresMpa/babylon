let header = document.querySelector('h1')
let box = document.querySelector('div')

box.addEventListener('mouseover', function(){
  header.innerHTML = `Your mouse is over the box`;
  box.style = `background-color: green`;
});

box.addEventListener('mouseout', function(){
  header.innerHTML = `Hey, look that button`;
  box.style = `background-color: red`;
});

header.addEventListener('mouseover', function(){
  header.innerHTML = `Your mouse is over the title`;
  box.style = `background-color: blue`;
});

header.addEventListener('mouseout', function(){
  header.innerHTML = `Hey, look that button`;
  box.style = `background-color: red`;
});


