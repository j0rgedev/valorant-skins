import showContent from '../utils/weapons.js';
import getAPIData from '../../common/js/api.js';

document.addEventListener("DOMContentLoaded", function() {
    sessionStorage.removeItem('weapon-name');
    const url = 'https://valorant-api.com/v1/weapons';
    getAPIData(url)
        .then((data) => showContent(data.data))
        .catch(err => console.error(err));

    setTimeout(() => {
        setName();
    }, 1000);
});

const setName = () => {
    const btns = document.querySelectorAll('.show_button');
    btns.forEach((btn) => {
        btn.addEventListener('click',()=>{
            let name = btn.id;
            sessionStorage.setItem('weapon-name',name)
            location.href = '../skins/';
        })
    });
}


