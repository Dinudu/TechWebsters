

 const imageGallery = document.querySelector(".image-gallery");
let currentIndex = 0;

  setInterval(() => {
    currentIndex = (currentIndex + 1) % imageGallery.children.length;
    updateGalleryPosition();
  }, 3000);

  function updateGalleryPosition() {
    const translateX = -currentIndex * 10;
    imageGallery.style.transform = `translateX(${translateX}vw)`;
  }

//Header Show
const header = document.querySelector("header");
window.addEventListener("scroll",function(){
    header.classList.toggle("sticky",window.scrollY >60)
});

// Responsive Navibar show
let menu = document.querySelector('#menu_icon1');
let navbar = document.querySelector('.navbar');
menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
};