const fetchData = require("../utils/fetchData");
const API = "https://rickandmortyapi.com/api/character/";

const getData = async (url_api) => {
  try {
    const data = await fetchData(url_api);
    const character = await fetchData(`${API}${data.results[0].id}`);
    const origin = await fetchData(character.origin.url);

    console.log(`
    ${data.info.count}
    ${character.name}
    ${origin.dimension}
    `);
  } catch (error) {
    console.error(error);
  }
};

console.log("Before");
getData(API);
console.log("After");
