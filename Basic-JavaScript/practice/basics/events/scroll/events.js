let pageScroll; //This create variable once

window.addEventListener('scroll', function (){
  pageScroll = window.pageYOffset;
  box.style = `background-color: rgb(${pageScroll / 10}, ${pageScroll / 10}, ${pageScroll / 10})`;
})
