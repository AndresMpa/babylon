// Events management

import {
  hidePreviosComponent,
  toggleComponentView,
  generateSrc,
} from "./content/utility.js";
import { addPost, removeLastPost } from "./content/post.js";

const actions = {
  foxIcon: (component) => hidePreviosComponent(component),
  add: () => addPost(generateSrc()),
  remove: () => removeLastPost(),
};

document.addEventListener("click", (event) => {
  if (Object.keys(actions).includes(event.target.id)) {
    actions[event.target.id](event.target);
  }
});

document.addEventListener("scroll", (event) => {
  const components = [
    document.querySelector("#banner"),
    document.querySelector("#credits"),
  ];

  components.forEach((component) => toggleComponentView(component));
});

window.addEventListener("beforeunload", () => sessionStorage.clear());
