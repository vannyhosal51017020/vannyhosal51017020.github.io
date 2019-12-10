const key = 'eb6b7eba8a8fcec3769b2610e7c06efe';
const endpoint_url = 'https://api.themoviedb.org/3';

// Blok kode untuk melakukan request API

function getListMovie(services, sectiontitle) {
  fetch(endpoint_url + services + "?api_key=" + key + "&language=en-US&page=1")
  // fetch(endpoint_url + "/movie/{movie_id}/release_dates?api_key=api_key")
  .then(status)
  .then(json)
  .then(function(data) {
    // Object/array JavaScript dari response.json() masuk lewat data.
    // Menyusun komponen card movie secara dinamis
    // <a href="./movie.html?id=${movie.id},release_dates"
    // <link href="https://api.themoviedb.org/3/movie/{movie_id}/release_dates?api_key=" + api +  rel="stylesheet">
    var moviesHTML = "";
    data.results.forEach(function(movie) {
      moviesHTML += `
        <div class="col m3 s6">
           <div class="card">
              <a href="./movie.html?id=${movie.id}">
                <div class="card-image waves-effect waves-block waves-light">
                  <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" />
                </div>
              </a>
              <div class="card-content text-center">
                 <strong>${movie.title}</strong>
              </div>
           </div>
        </div>
        `;
    });
    //        <link href="https://api.themoviedb.org/3/movie/{movie_id}?api_key="api"+&language=en-US

//  function getMovie( movie_id ) {
//     fetch(endpoint_url + "/movie/movie_id?api_key=" + api + "&language=en-US")
//    .then(status)
//    .then(json)
//    .then(function(data) {
//      var moviesHTML = "";
//      data.results.forEach(function(movie) {
//        moviesHTML += `
//        <div class="col m3 s6">
//        <a href=".movie.html?=${movie.id}">
//        <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" />
//   </div>
//      </a>
//    <div class="card-content text-center">
//      <strong>${movie.title}</strong>
//  </div>
//  `;
// });

      document.getElementById("movie_list").innerHTML = moviesHTML;
      document.getElementById("section_title").innerHTML = sectiontitle;
      document.getElementById("movie_id").innerHTML = moviesHTML;
      document.getElementById("release_dates").innerHTML = releasedates;

  })
  .catch(error);
}
