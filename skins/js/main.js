import getAPIData from '../../common/js/api.js';
import showContent from '../utils/skins.js';
import {getNames} from '../utils/weapons-name.js'

document.addEventListener('DOMContentLoaded',()=>{
    const url = 'https://valorant-api.com/v1/weapons';
    getAPIData(url)
        .then((data) => getNames(data.data))
        .catch(err => console.error(err));

    getAPIData(url)
        .then((data) => showContent(data.data))
        .catch(err => console.error(err));

    filter();
})

const filter = () => {
    const sb = document.querySelector('.weapons_select');
    const btn = document.getElementById('filter_btn');
    btn.addEventListener('click',()=>{
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
