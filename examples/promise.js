const apiKey = "30e24e7ce60b24743719e0444334fdad";

async function getMovie(identifier) {
  /*
  Using then it goes like this
  
  const URL = `https://api.themoviedb.org/3/movie/${identifier}?api_key=${apiKey}`;
  return fetch(URL).then((response) => response.json());
  */
  const URL = `https://api.themoviedb.org/3/movie/${identifier}?api_key=${apiKey}`;
  const response = await fetch(URL);
  const data = await response.json();
  return data;
}

async function getPopularMovies() {
  /*
  Using then it goes like this
  
  const URL = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`;
  return fetch(URL)
    .then((response) => response.json())
    .then((data) => data.results);
  */
  const URL = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`;
  const response = await fetch(URL);
  const data = await response.json();
  return data.results;
}

async function getTopMoviesIds(quantity = 3) {
  /*
  Using then it goes like this
  
  return getPopularMovies().then((popularMovies) => {
    popularMovies.slice(0, quantity).map((movie) => {
      movie.id;
    });
  });
  */

  try {
    const popularMovies = await getPopularMovies();
    const identifierArray = popularMovies
      .slice(0, quantity)
      .map((movie) => movie.id);

    return identifierArray;
  } catch {
    console.error(error.message);
  }
}

const renderMovies = (movies) => {
  const moviesList = document.querySelector("#moviesList");
  moviesList.innerHTML = ``;

  movies.forEach((movie) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
      <img src="https://image.tmdb.org/t/p/original${movie.poster_path}" alt="${movie.title}">
      <h5>${movie.title}</h5>
      <p>Released on <em>${movie.release_date}</em></p>
    `;
    moviesList.appendChild(listItem);
  });
};

async function getSequenceTopMovie() {
  const ids = await getTopMoviesIds();
  const movies = [];
  for (const id of ids) {
    const movie = await getMovie(id);
    movies.push(movie);
  }

  return movies;
}

async function getParallelTopMovie() {
  const ids = await getTopMoviesIds();
  const moviePromise = ids.map((id) => getMovie(id));

  const movies = await Promise.all(moviePromise);
  return movies;
}

async function getFastestTopMovie() {
  const ids = await getTopMoviesIds();
  const moviePromise = ids.map((id) => getMovie(id));

  const movie = await Promise.race(moviePromise);
  return movie;
}

const handleRender = () => {
  const hiddenElement = document.querySelectorAll(".d-none");
  const options = document.querySelector(".options");

  options.classList = "options animate__animated animate__fadeOutUp";
  setTimeout(() => {
    options.style.display = "none";
  }, 800);

  hiddenElement.forEach((element) => {
    element.style.display = "flex";
  });
};

const reset = () => {
  const hiddenElement = document.querySelectorAll(".d-none");
  const options = document.querySelector(".options");

  options.classList =
    "options animate__animated animate__fadeInDown animate__faster";
  setTimeout(() => {
    options.style.display = "flex";
  }, 800);

  hiddenElement.forEach((element) => {
    element.style.display = "none";
  });
};

document.querySelector("#sequence").addEventListener("click", async () => {
  const movies = await getSequenceTopMovie();
  renderMovies(movies);
  handleRender();
});
document.querySelector("#parallel").addEventListener("click", async () => {
  const movies = await getParallelTopMovie();
  renderMovies(movies);
  handleRender();
});
document.querySelector("#fastest").addEventListener("click", async () => {
  const movies = await getFastestTopMovie();
  renderMovies([movies]);
  handleRender();
});

document.querySelector("#close").addEventListener("click", () => {
  reset();
});
