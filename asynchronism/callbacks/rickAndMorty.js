let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
let API = "https://rickandmortyapi.com/api/character/";

const fetchData = (url_api, callback) => {
  let xhttp = new XMLHttpRequest();

  xhttp.open("GET", url_api, true);
  xhttp.onreadystatechange = (event) => {
    if (xhttp.readyState === 4) {
      if (xhttp.status === 200) {
        console.log("Ok");
        callback(null, JSON.parse(xhttp.responseText));
      } else {
        const error = new Error("Error " + url_api);
        return callback(error, null);
      }
    }
  };

  xhttp.send();
};

fetchData(API, (error1, data1) => {
  if (error1) {
    return console.error(error1);
  } else {
    fetchData(API + data1.results[0].id, (error2, data2) => {
      if (error2) {
        return console.error(error2);
      } else {
        fetchData(data2.origin.url, (error3, data3) => {
          if (error3) {
            return console.error(error3);
          } else {
            console.log(data1.info.count);
            console.log(data2.name);
            console.log(data3.dimension);
          }
        });
      }
    });
  }
});

