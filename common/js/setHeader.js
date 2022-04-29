const nav = document.querySelector('.header');
const navstyle = document.getElementById('header');

window.addEventListener('scroll',() => {
    const offset = window.scrollY;
    if(offset>75){
        nav.classList.add('scroll');
        navstyle.style.padding = '15px 15px 15px 15px';
    } else {
        nav.classList.remove('scroll');
    }
})

const navMenu = document.getElementById('nav'),
    bars = document.getElementById('bars_btn'),
    close = document.getElementById('closenav_btn');

bars.addEventListener('click', () => {
    navMenu.classList.toggle('show');
})

close.addEventListener('click', () => {
    navMenu.classList.remove('show');
})

const navitems = document.querySelectorAll('.nav_items a');
navitems.forEach((item,i)=>{
    navitems[i].addEventListener('click',()=>{
        navMenu.classList.remove('show');
    })
}) 

document.onclick = function(e){
    if(navMenu.classList.contains('show') && e.target.id == 'main_section'){
        navMenu.classList.remove('show');
    }
}


