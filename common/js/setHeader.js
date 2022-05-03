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
