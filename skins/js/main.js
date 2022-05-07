import getAPIData from '../../common/js/api.js';
import {showAllContent} from '../utils/skins.js';
import {setOptionsName} from '../utils/weapons-name.js';

document.addEventListener('DOMContentLoaded',()=>{
    const url = 'https://valorant-api.com/v1/weapons';
    getAPIData(url)
        .then((data) => setOptionsName(data.data))
        .catch(err => console.error(err));

    getAPIData(url)
        .then((data) => showAllContent(data.data))
        .catch(err => console.error(err));        

    filterAction();
    showSearchBar();
    showFilters();
    
    window.addEventListener('scroll',reveal);
})


const filterAction = () => {
    const sb = document.querySelector('.weapons_select');
    const btn = document.getElementById('filter_btn');
    btn.addEventListener('click',()=>{
        let aux = sessionStorage.getItem('cont');
        sessionStorage.setItem('cont',Number(aux)+1);
        const cont = sessionStorage.getItem('cont');
        const selectedValues = [].filter
                .call(sb.options, option => option.selected)
                .map(option => option.text);

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


const showSearchBar = () =>{
    const icon = document.getElementById('search-icon');
    const search = document.getElementById('s-wrapper');
    icon.addEventListener('click',()=>{
        search.classList.toggle('active');
    })
}

const showFilters = () =>{
    const filter_icon = document.getElementById('filter_icon');
    const f = document.getElementById('right');
    filter_icon.addEventListener('click',()=>{
        f.classList.toggle('active');
    })
}

const reveal = () => {
    let cards = document.querySelectorAll('.card');
    cards.forEach((elem,index)=>{
        let windowsH = window.innerHeight;
        let revealTop = cards[index].getBoundingClientRect().top;
        let revealpoint = 200;
        if(revealTop < windowsH - revealpoint){
            cards[index].classList.add('active')
        } else {
            cards[index].classList.remove('active');
        }
    })
}

const removeFilters = () => {
    const cards = document.querySelectorAll('.card');
    cards.forEach((card)=>{
        card.style.display = 'block';
    })
}

const btn = document.getElementById('remove-filters-button');
btn.addEventListener('click',()=>{
    removeFilters();
})
