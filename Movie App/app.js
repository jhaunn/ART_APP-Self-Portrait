const api_key = 'fa8b656b4b3a808cf94e8a70e6de293b';
const api_url = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key='+api_key+'&page=1';
const img_path = 'https://image.tmdb.org/t/p/w1280';
const search_url = 'https://api.themoviedb.org/3/search/movie?api_key='+api_key+'&query="';

let main = document.querySelector('main');
let form = document.querySelector('form');
let search = document.querySelector('input');
let movieCards;

async function getMovies(url) {
   const res = await fetch(url);
   const data = await res.json();

   showMovies(data.results);
}

function showMovies(movies){
   main.innerHTML = '';

   movies.forEach(movie => {
      const { title, poster_path, vote_average, overview } = movie;

      addMovieCards(title, poster_path, vote_average, overview);
   });
}

form.addEventListener('submit', (e) => {
   e.preventDefault();

   const searchTerm = search.value;

   if (searchTerm && searchTerm !== '') {
      getMovies(search_url + searchTerm);

      search.value = '';
   }
   else {
      window.location.reload;
   }
});

function getMovieCards() {
   movieCards = document.querySelectorAll('.movie-card');

   movieCards.forEach(element => {
      element.addEventListener('mouseover', () => {
         let overview = element.querySelector('.overview');
         overview.classList.add('active');
      })

      element.addEventListener('mouseout', () => {
         let overview = element.querySelector('.overview');
         overview.classList.remove('active');
      })
   });
}

function addMovieCards(title, poster, rating, overview) {
   main.innerHTML += `
   <div class="movie-card">
      <img src="${img_path + poster}" alt="${title}">
      <div class="info">
         <span class="title">${title}</span>
         <span class="rating">${rating}</span>
      </div>
      <div class="overview">
         <h1>Overview</h1>
         <p>${overview}</p>
      </div>
   </div>
   `;

   getMovieCards();
}

getMovies(api_url);