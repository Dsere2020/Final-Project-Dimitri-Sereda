const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");

})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:5,
    nav:false,
    autoplay:true,
    autoplayTimeout: 2200,
    smartSpeed: 2400,
    slideTransition: 'linear',
    autoplayHoverPause: true,
    dots:false,
    responsive:{
        0:{
            items:3
        },
        600:{
            items:6
        },
        1000:{
            items:10
        }
    }
})
function openForm() {
    document.getElementById("myForm").style.display = "block";

  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }