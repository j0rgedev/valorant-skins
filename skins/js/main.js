import getAPIData from '../../common/js/api.js';
import showContent from '../utils/skins.js';
import {getNames} from '../utils/weapons-name.js';

document.addEventListener('DOMContentLoaded',()=>{
    const url = 'https://valorant-api.com/v1/weapons';
    getAPIData(url)
        .then((data) => getNames(data.data))
        .catch(err => console.error(err));

    getAPIData(url)
        .then((data) => showContent(data.data))
        .catch(err => console.error(err));

    filterAction();
    showFilters();

    window.addEventListener('scroll',reveal)
})

let cont = 0;
const filterAction = () => {
    const sb = document.querySelector('.weapons_select');
    const btn = document.getElementById('filter_btn');
    const disc = document.getElementById('disclaimer');
    btn.addEventListener('click',()=>{
/*         const icons = document.getElementById('filters_icons');
        icons.classList.add('active'); */
        cont++;
        if (cont==1){
            disc.classList.add('active');
        }
        const selectedValues = [].filter
                .call(sb.options, option => option.selected)
                .map(option => option.text);
        const cards = document.querySelectorAll('.'+selectedValues[0]);
        const all_cards = document.querySelectorAll('.card');
        all_cards.forEach((elem) => {
            if(!elem.classList.contains(selectedValues[0])){
                elem.style.display = 'none';
            } else {
                elem.style.display = 'block';
            }
        })
    })
}

const showFilters = () =>{
    const filter_icon = document.getElementById('filter_icon');
    const disc = document.getElementById('disclaimer');
    const f = document.getElementById('filters');
    filter_icon.addEventListener('click',()=>{
        f.classList.toggle('active');
        disc.classList.remove('active');
    })
}

const reveal = () => {
    let cards = document.querySelectorAll('.card');
    const disc = document.getElementById('disclaimer');
    cards.forEach((elem,index)=>{
        let windowsH = window.innerHeight;
        let revealTop = cards[index].getBoundingClientRect().top;
        let revealpoint = 200;
        if(revealTop < windowsH - revealpoint){
            cards[index].classList.add('active')
            disc.classList.remove('active');
        } else {
            cards[index].classList.remove('active');
        }
    })
}
