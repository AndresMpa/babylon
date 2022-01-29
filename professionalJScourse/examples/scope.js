// Scope
const logNumber = () => {
  //let i // De esta manera el block scope es más extenso
  for (let i = 0; i < 10; i++) {
    setTimeout(() => {
      console.log(i);
    }, 100);
  }
};
logNumber();
