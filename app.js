let hobbySection = document.querySelector('#hobby-section');
let hobbyLeftBtn = document.querySelector('#hobby-section #left-btn');
let hobbyRightBtn = document.querySelector('#hobby-section #right-btn');
let current = 0;

hobbyLeftBtn.addEventListener('click', e => {
   if (current > 0) {
      --current;
   }
   else {
      current = 1;
   }

   hobbySection.querySelectorAll('#animanga').forEach(element => {
      element.style.transform = `translate(${-current * 100}%)`;
   });
});

hobbyRightBtn.addEventListener('click', e => {
   if (current < 1) {
      ++current;
   }
   else {
      current = 0;
   }

   hobbySection.querySelectorAll('#animanga').forEach(element => {
      element.style.transform = `translate(${-current * 100}%)`;
   });
});