/**
 * @constructor Movies
 *  
 */

const Movies = function () {
};

/**
 * @method routerInitialize initialize path change
 * 
 * @returns {none}
 */
Movies.prototype.routerInitialize = function () {
  let pageName = window.location.hash || '#page1';

  switch (pageName) {
    case '#page1': {
      movies.fetchAll();
      break;
    }
    case '#page2': {
      break;
    }
    default:

  }

}

/**
 * @method fetchAll fetch all movies
 * 
 * @returns {obj} movies list
 */
Movies.prototype.fetchAll = function () {

  //change context
  const _self = this;

  const config = {
    url: "https://api.themoviedb.org/4/list/1?page=1&api_key=574c3d28a19ee50fbd1077e77c56fd67"
  };

  let data = fetch(config.url).then(function (response) {
    return response.json()
  }).then(function (data) {
    _self.showMovies(data.results);
  });

  return data;

};

/**
 * @method showMovies show movies
 * 
 * @param {Array}  videos array 
 */
Movies.prototype.showMovies = function (arg) {

  var mainContainer = document.getElementById("page1_ul");

  // apply loop of good performance
  for (var i = 0; i < arg.length; i++) {
    var li = document.createElement('li');
    li.innerHTML = `<img src="https://image.tmdb.org/t/p/w92/${arg[i].poster_path}" alt="${arg[i].title}"/> \
                        <p>${arg[i].title+"("+arg[i].release_date})</p> \
                        <span>${arg[i].overview}</span>`;
    mainContainer.appendChild(li);
  }
};

/**
 * instantiate Movies object
 */
const movies = new Movies();

movies.routerInitialize()
window.addEventListener('hashchange', movies.routerInitialize());