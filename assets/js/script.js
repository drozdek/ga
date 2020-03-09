/**
 * @constructor Movies
 *  
 */

const Movies = function () {
};

/**
 * @method fetchAll fetch all movies
 * 
 * @returns {obj} movies list
 */

Movies.prototype.router = function () {
  let pageName = window.location.hash || '#index.html';
  document.getElementsByClassName('page').classList.add = "hide";
  document.getElementsByClassName('page').classList.add = "show";


  switch (pageName) {
    case '#page1': {
      alert('p1');
      break;
    }
    case '#page2': {
      alert('p2')
    }
  }

}

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
    debugger;
  });

  return data;

};

Movies.prototype.showMovies = function (arg) {
  for (var i = 0; i <= arg.length; i++) {
    console.log(arg[i]);
  }

}

const movies = new Movies();
movies.fetchAll();

window.addEventListener('hashchange', movies.router());