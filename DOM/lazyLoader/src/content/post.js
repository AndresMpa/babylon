import { observer, trackContent } from "./lazy.js";
import { sessionCounterAdder } from "./utility.js";

const mountPoint = document.querySelector("#app");

const addImage = (post) => {
  const container = document.createElement("figure");
  const image = document.createElement("img");

  container.classList = "bg-gray-200 rounded-md w-11/12 min-h-[300px]";

  image.classList = "p-5 max-h-96 m-auto rounded";
  image.dataset.src = post;

  container.append(image);
  return container;
};

const addPost = (data) => {
  const post = addImage(data);
  mountPoint.append(post);

  sessionCounterAdder("contentCounter");

  trackContent(post, observer);
};

const removeLastPost = () => {
  const index = mountPoint.childNodes.length;
  if (index > 0) {
    mountPoint.removeChild([...mountPoint.childNodes][index - 1]);
  }
};

export { removeLastPost, addImage, addPost };
