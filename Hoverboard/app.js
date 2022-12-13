let board = document.querySelector('#board');
let keys = [];

for (let i = 0; i < 500; i++) {
   let key = document.createElement('span');
   key.classList.add('keys');
   keys.push(key);
   board.appendChild(key);
}

keys.forEach(element => {
   element.addEventListener('mouseover', e => {
      let color = '#'+(0x1000000+Math.random()*0xffffff).toString(16).substring(1,7)
      element.style.backgroundColor = color;
      element.style.boxShadow = `0 0 5px ${color}`;
   });

   element.addEventListener('mouseleave', e => {
      setTimeout(function() {
         element.style.backgroundColor = '#25292D';
         element.style.boxShadow = '0 0 5px #25292D';
      }, 1000);
   })
});