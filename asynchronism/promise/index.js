const somethingWillHappen = () => {
  return new Promise((resolve, reject) => {
    true ? resolve("Hey!") : reject("Ups...");
  });
};

somethingWillHappen()
  .then((res) => console.log(res))
  .catch((error) => console.log(error));

const somethingWillHappenAgain = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      setTimeout(() => {
        resolve("Hey!");
      }, 2000);
    } else {
      const error = new Error("Ups...");
      reject(error);
    }
  });
};

somethingWillHappenAgain()
  .then((res) => console.log(res))
  .catch((error) => console.log(error));

Promise.all([somethingWillHappen(), somethingWillHappenAgain()])
	.then(response => console.log("Array of result: ", response))
  .catch((error) => console.log(error));
