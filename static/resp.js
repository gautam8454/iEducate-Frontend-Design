burger = document.querySelector('.burger')
navbar = document.querySelector('#navbar')
navright = document.querySelector('.right')
navlist = document.querySelector('.nav-list')

burger.addEventListener('click', ()=>{
    navright.classList.toggle('v-nav-resp');
    navlist.classList.toggle('v-nav-resp');
    navbar.classList.toggle('h-nav-resp');
})