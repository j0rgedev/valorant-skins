const openChromasButton = document.querySelectorAll('#chromas-button');
const closeChromasButton = document.querySelectorAll('#close-button');
const bg = document.getElementById('overlay');

openChromasButton.forEach((btn)=>{
    btn.addEventListener('click',()=>{
        const chromas = document.getElementById('chromas');
        openChromas(chromas);
    })
})

closeChromasButton.forEach(btn=>{
    btn.addEventListener('click',()=>{
        const chromas = document.getElementById('chromas');
        closeChromas(chromas);
    })
})

bg.addEventListener('click',()=>{
    const chromas = document.querySelectorAll('.skin-chromas.active');
    chromas.forEach(div=>{
        closeChromas(div)
    })
})

const openChromas = (div) => {
    if (div==null) return;
    div.classList.add('active');
    bg.classList.add('active')
}

const closeChromas = (div) => {
    if (div==null) return;
    div.classList.remove('active');
    bg.classList.remove('active')
}
