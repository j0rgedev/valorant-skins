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

