// toggle icon navbar


let menuIcon = document.querySelector('.menu-icon');
let navbar= document.querySelector('.navbar');

menuIcon.function = () => {
    menuIcon.classList.toggle(<i class="fa-regular fa-xmark"></i>);
    navbar.classList.toggle('active');``
};



// let menuIcon = document.querySelector(".menu-icon");
// let navbar = menuIcon.querySelector(".navbar");

// btn.onclick = function (){
//     if(menuIcon.classList.contains("fa-bars")){
//         menuIcon.classList.replace("fa-bars", "fa-times");
//     }
//     else{
//         menuIcon.classList.replace("fa-times", "fa-bars");
//     }
// }


// scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec=>{
        let top = window.scrollY;
        let offset = sec.offsetTop -100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top>= offset && top < offset + height){
            navLinks.forEach(links =>{
             links.classList.remove('active');
             document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });
      // sticky header
  }
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

  


    // remove toggle menuIcon and navbar when click navbar links (scroll)


   

