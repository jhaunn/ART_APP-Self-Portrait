let jokeEl = document.querySelector('#joke');
let jokeBtn = document.querySelector('#joke-button');

function generateJoke() {
   fetch('https://icanhazdadjoke.com', {
      headers: {
         'accept' : 'application/json'
      }
   })
   .then(res => res.json())
   .then(data => {
      jokeEl.textContent = data.joke;
   })
}

generateJoke();

jokeBtn.addEventListener('click', () => {
   generateJoke();  
});