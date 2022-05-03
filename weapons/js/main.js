import showContent from '../utils/weapons.js';
import getAPIData from '../../common/js/api.js'

document.addEventListener("DOMContentLoaded", function() {
    const url = 'https://valorant-api.com/v1/weapons';
    getAPIData(url)
        .then((data) => showContent(data.data))
        .catch(err => console.error(err));

        
    setTimeout(() => {
        getSkinName();
    }, 1000);
});

const names = [];

const getSkinName = () => {
    const btns = document.querySelectorAll('.show_button');
    btns.forEach((btn,i) => {
        btn.addEventListener('click',()=>{
            let name = btn.id;
            names.push(name);
        })
    });
}
