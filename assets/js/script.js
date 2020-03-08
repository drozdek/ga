/**
 * @constructor Movies
 *  
 */
const Movies = function () {
};

/**
 * 
 */
Movies.prototype.fetchAll = function () {

  const config = {
    API_KEY: "574c3d28a19ee50fbd1077e77c56fd67",
    url: "https://api.themoviedb.org/4/list/1?page=1&api_key="
  };

  fetch(config.url).
    then(e => e.json()).
    then(e => console.log(e))

};

const movies = new Movies();

movies.fetchAll();