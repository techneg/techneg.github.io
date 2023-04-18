let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');
let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let loginClose = document.querySelector('#form-close');
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let VideoBtn = document.querySelectorAll('.vid-btn');
window.onscroll = () =>{
    searchBtn.classList.remove('fa-square-xmark');
    searchBar.classList.remove('active');
    menu.classList.remove('fa-bars');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
}

menu.addEventListener('click', () =>{
    menu.classList.toggle('fa-bars');
    navbar.classList.toggle('active'); 
});
searchBtn.addEventListener('click', () =>{
    searchBtn.classList.toggle('fa-square-xmark');
    searchBar.classList.toggle('active'); 
});

formBtn.addEventListener('click', () =>{
    loginForm.classList.add('active'); 
});

loginClose.addEventListener('click', () =>{
    loginForm.classList.remove('active'); 
});

VideoBtn.forEach(btn =>{
    btn.addEventListener('click', ()=>{
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        let src = btn.getAttribute('data-src');
        document.querySelector('#video-slider').src = src;
    });
});

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 20,
    loop: true,
    autoplay:{
        delay:2500,
        disableOnIneraction:false,
    },
    breakpoints:{
        640:{
            slidesPerView: 1,
        },
        768:{
            slidesPerView: 2,
        },
        1024:{
            slidesPerView: 3,
        },
    },
});