var swiper = new Swiper(".swiper-container", {
    spaceBetween: 0,
    effect:"slide",
    loop:true,
    speed:2000,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    // autoplay:{
    //     delay:3000,
    // },
  });


  //Mobile Menu

 let mobileMenuIcon = document.querySelector(" header .fa-bars");
 let menu = document.querySelector("header .menu");

 mobileMenuIcon.addEventListener("click", function(){
   menu.classList.toggle("open");
 })