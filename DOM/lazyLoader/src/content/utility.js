const URL = "https://randomfox.ca/images/";
const CURRENT_FOX_API_AMOUNT = [1, 123];

const toggleComponentView = (component) => {
  if (window.scrollY !== 0) {
    component.classList.remove("animate__fadeInUp");
    component.classList.add("animate__animated");
    component.classList.add("animate__fadeOutDown");
  } else {
    component.classList.remove("animate__fadeOutDown");
    component.classList.add("animate__animated");
    component.classList.add("animate__fadeInUp");
  }
};

const hidePreviosComponent = (component) => {
  const target = component.parentElement.previousElementSibling;
  target.classList.add("animate__animated");

  if (target.classList.contains("animate__bounceOutRight")) {
    target.classList.remove("animate__bounceOutRight");
    target.classList.add("animate__bounceInRight");
  } else {
    target.classList.remove("animate__bounceInRight");
    target.classList.add("animate__bounceOutRight");
  }
};

const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const generateSrc = () =>
  `${URL}/${random(CURRENT_FOX_API_AMOUNT[0], CURRENT_FOX_API_AMOUNT[1])}.jpg`;

const sessionCounterAdder = (target) => {
  const counter = parseInt(sessionStorage.getItem(target)) || 0;
  return sessionStorage.setItem(target, counter + 1);
};

const statsLogger = (sentences) =>
  sentences.forEach((item) =>
    console.log(`${item[0]}: ${sessionStorage.getItem(item[1])}`)
  );

export {
  hidePreviosComponent,
  toggleComponentView,
  sessionCounterAdder,
  statsLogger,
  generateSrc,
  random,
};
