//Coger una referencia al campo
const sample = document.querySelector("#sample");

//Evento para coger la muestra
sample.addEventListener("change", () => {
  //Crear un nuevo array con la cadena de texto
  let foundSample = sample.value.split(" ");
  //Cambiar el tipo de datos
  foundSample = foundSample.map((element) => {
    return parseInt(element);
  });
  //Filtrar el array para limpiar la muestra de datos y no tener NaN
  foundSample = foundSample.filter((element) => {
    if (element !== NaN) {
      return element;
    }
  });
  //Data resultante
  console.log(foundSample);
});
