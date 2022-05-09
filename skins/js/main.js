import getAPIData from '../../common/js/api.js';
import * as utils from '../utils/skins.js';
import {setOptionsName} from '../utils/weapons-name.js';
import loadingContent from '../../common/js/other.js'

document.addEventListener('DOMContentLoaded',()=>{
    const url = 'https://valorant-api.com/v1/weapons';
    const offer_url = 'https://api.henrikdev.xyz/valorant/v1/store-offers';
    const p1 = getAPIData(offer_url)
                .then(data => data.data)
                .then(data => utils.setSkinPricesArray(data.Offers))
                .catch(err => console.error(err));
    const p2 = getAPIData(url)
                .then((data) => setOptionsName(data.data))
                .catch(err => console.error(err));

    Promise.allSettled([p1,p2])
        .then(()=>{
            getAPIData(url)
                .then((data) => utils.showAllContent(data.data))
                .catch(err => console.error(err))
                .finally(()=>{
                    loadingContent();
                    const f_icon = document.getElementById('f-icon');
                    const s_icon = document.getElementById('s-icon-wrapper');
                    f_icon.classList.add('active');
                    s_icon.classList.add('active');
                    utils.searchSkins();
                    utils.filterWeapons();
                    utils.bundleSkinFilter();
                    utils.openChromas();
                })  
        })

    filterAction();
    showSearchBar();
    showFilters();
})

const filterAction = () => {
    const sb = document.querySelector('.weapons_select');
    const btn = document.getElementById('filter_btn');
    btn.addEventListener('click',()=>{
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





