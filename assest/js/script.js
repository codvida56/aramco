/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Menu show */
if(navToggle){
   navToggle.addEventListener('click', () =>{
      navMenu.classList.add('show-menu')
   })
}

/* Menu hidden */
if(navClose){
   navClose.addEventListener('click', () =>{
      navMenu.classList.remove('show-menu')
   })
}


/*=============== SEARCH ===============*/
const search = document.getElementById('search'),
      searchBtn = document.getElementById('search-btn'),
      searchClose = document.getElementById('search-close');

searchBtn.addEventListener('click', () => {
  search.classList.add('show-search');
});

searchClose.addEventListener('click', () => {
  search.classList.remove('show-search');
});




const slides = document.querySelectorAll('.slides img');
const headings = document.querySelectorAll('.outer-headings');
let currentSlide = 0;

function showNextSlide() {
    slides[currentSlide].classList.remove('active');
    headings[currentSlide].classList.remove('active');

    currentSlide = (currentSlide + 1) % slides.length;

    slides[currentSlide].classList.add('active');
    headings[currentSlide].classList.add('active');
}

setInterval(showNextSlide, 3500);

// Initially set the first slide as active
slides[currentSlide].classList.add('active');
headings[currentSlide].classList.add('active');










const carousel = document.getElementById("galleryCarousel");
let isDragging = false;
let startX;
let scrollLeft;

// When the user presses the mouse button
carousel.addEventListener("mousedown", (e) => {
    isDragging = true;
    startX = e.pageX - carousel.offsetLeft;
    scrollLeft = carousel.scrollLeft;
    carousel.style.cursor = "grabbing"; // Change cursor to grabbing
});

// When the user releases the mouse button
carousel.addEventListener("mouseup", () => {
    isDragging = false;
    carousel.style.cursor = "grab"; // Change cursor back to grab
});

// When the user moves the mouse while pressing the mouse button
carousel.addEventListener("mousemove", (e) => {
    if (!isDragging) return;

    const x = e.pageX - carousel.offsetLeft;
    const walk = (x - startX); // Calculate how much the mouse has moved

    carousel.scrollLeft = scrollLeft - walk; // Adjust the scroll position of the carousel
});

// When the user leaves the carousel area (in case they stop dragging outside)
carousel.addEventListener("mouseleave", () => {
    isDragging = false;
    carousel.style.cursor = "grab"; // Change cursor back to grab
});








// إظهار الزر عند التمرير للأسفل
window.addEventListener('scroll', function() {
   const scrollUpBtn = document.querySelector('.scroll-up');
   if (window.scrollY > 200) {
       scrollUpBtn.style.display = 'block';
   } else {
       scrollUpBtn.style.display = 'none';
   }
});

// وظيفة التمرير للأعلى
function scrollToTop() {
   window.scrollTo({
       top: 0,
       behavior: 'smooth'
   });
}

